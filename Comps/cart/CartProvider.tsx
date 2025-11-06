"use client";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

export type CartItem = {
  key: string; // unique key for item+variant: `${id}-${color}-${size}`
  id: string;
  name: string;
  image?: string;
  color?: string;
  size?: string;
  price: number; // unit price
  qty: number;
};

export type CartState = {
  id: string; // session/user cart id
  items: CartItem[];
  coupon?: string | null;
};

export type CartTotals = {
  itemCount: number;
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  total: number;
};

export type CartContextType = {
  cart: CartState;
  totals: CartTotals;
  addItem: (item: Omit<CartItem, "key" | "qty"> & { qty?: number }) => void;
  updateItemQty: (key: string, qty: number) => void;
  updateItemAttrs: (key: string, attrs: Partial<Pick<CartItem, "color" | "size">>) => void;
  removeItem: (key: string) => void;
  clear: () => void;
  setCoupon: (code: string | null) => void;
};

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "cart.v1";
const SESSION_KEY = "cart.sessionId";

function ensureSessionId(): string {
  if (typeof window === "undefined") return "server";
  let sid = localStorage.getItem(SESSION_KEY);
  if (!sid) {
    sid = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, sid);
  }
  return sid;
}

function calcTotals(items: CartItem[], coupon?: string | null): CartTotals {
  const subtotal = items.reduce((a, it) => a + it.price * it.qty, 0);
  // Stub calculations
  const discount = coupon ? Math.min(subtotal * 0.1, 50) : 0; // up to $50 off
  const taxable = Math.max(subtotal - discount, 0);
  const tax = Math.round(taxable * 0.075 * 100) / 100; // 7.5%
  const shipping = subtotal > 100 ? 0 : items.length > 0 ? 9.99 : 0; // free over $100
  const total = Math.max(taxable + tax + shipping, 0);
  const itemCount = items.reduce((a, it) => a + it.qty, 0);
  return { itemCount, subtotal, discount, tax, shipping, total };
}

function makeKey(id: string, color?: string, size?: string) {
  return [id, color ?? "-", size ?? "-"].join(":");
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const mounted = useRef(false);
  const [cart, setCart] = useState<CartState>({ id: "", items: [], coupon: null });

  // Load on mount
  useEffect(() => {
    const sid = ensureSessionId();
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as CartState;
        setCart({ id: parsed.id || sid, items: parsed.items || [], coupon: parsed.coupon ?? null });
      } catch {
        setCart({ id: sid, items: [], coupon: null });
      }
    } else {
      setCart({ id: sid, items: [], coupon: null });
    }
    mounted.current = true;
  }, []);

  // Persist on change
  useEffect(() => {
    if (!mounted.current) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const totals = useMemo(() => calcTotals(cart.items, cart.coupon), [cart.items, cart.coupon]);

  const addItem: CartContextType["addItem"] = (item) => {
    setCart((prev) => {
      const key = makeKey(item.id, item.color, item.size);
      const existing = prev.items.find((it) => it.key === key);
      if (existing) {
        return {
          ...prev,
          items: prev.items.map((it) =>
            it.key === key ? { ...it, qty: it.qty + (item.qty ?? 1) } : it
          ),
        };
      }
      const toAdd: CartItem = {
        key,
        id: item.id,
        name: item.name,
        image: item.image,
        color: item.color,
        size: item.size,
        price: item.price,
        qty: item.qty ?? 1,
      };
      return { ...prev, items: [...prev.items, toAdd] };
    });
  };

  const updateItemQty: CartContextType["updateItemQty"] = (key, qty) => {
    setCart((prev) => {
      if (qty <= 0) {
        return { ...prev, items: prev.items.filter((it) => it.key !== key) };
      }
      return { ...prev, items: prev.items.map((it) => (it.key === key ? { ...it, qty } : it)) };
    });
  };

  const updateItemAttrs: CartContextType["updateItemAttrs"] = (key, attrs) => {
    setCart((prev) => {
      const idx = prev.items.findIndex((it) => it.key === key);
      if (idx === -1) return prev;
      const cur = prev.items[idx];
      const next = { ...cur, ...attrs } as CartItem;
      const newKey = makeKey(next.id, next.color, next.size);
      next.key = newKey;
      const items = [...prev.items];
      items.splice(idx, 1);
      const existingIdx = items.findIndex((it) => it.key === newKey);
      if (existingIdx >= 0) {
        items[existingIdx] = { ...items[existingIdx], qty: items[existingIdx].qty + next.qty };
      } else {
        items.push(next);
      }
      return { ...prev, items };
    });
  };

  const removeItem: CartContextType["removeItem"] = (key) => {
    setCart((prev) => ({ ...prev, items: prev.items.filter((it) => it.key !== key) }));
  };

  const clear = () => setCart((prev) => ({ ...prev, items: [] }));
  const setCoupon = (code: string | null) => setCart((prev) => ({ ...prev, coupon: code }));

  const value: CartContextType = { cart, totals, addItem, updateItemQty, updateItemAttrs, removeItem, clear, setCoupon };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
