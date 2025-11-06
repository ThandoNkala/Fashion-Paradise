"use client";
import { useCart } from "../../Comps/cart/CartProvider";

export default function CartPage() {
  const { cart, totals, updateItemQty, removeItem } = useCart();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold">Your Cart</h1>

      <div className="mt-6 grid gap-8 lg:grid-cols-3">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.items.map((it) => (
            <div key={it.key} className="flex gap-4 rounded-lg border border-black/10 bg-background p-4">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-black">
                {it.image ? (
                  <img src={it.image} alt={it.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-white/70">No Image</div>
                )}
              </div>
              <div className="flex flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-sm font-medium">{it.name}</h3>
                  {it.color && <p className="mt-1 text-xs text-foreground/70">Color: {it.color}</p>}
                  {it.size && <p className="text-xs text-foreground/70">Size: {it.size}</p>}

                  <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-black/10 px-2 py-1 text-xs">
                    <button
                      className="rounded px-2 py-0.5 hover:bg-black/5"
                      aria-label="Decrease quantity"
                      onClick={() => updateItemQty(it.key, it.qty - 1)}
                    >
                      -
                    </button>
                    <span className="min-w-6 text-center">{it.qty}</span>
                    <button
                      className="rounded px-2 py-0.5 hover:bg-black/5"
                      aria-label="Increase quantity"
                      onClick={() => updateItemQty(it.key, it.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">${(it.price * it.qty).toFixed(2)}</p>
                  <button
                    className="mt-3 text-xs text-foreground/70 hover:underline"
                    onClick={() => removeItem(it.key)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {cart.items.length === 0 && (
            <div className="rounded-lg border border-black/10 bg-background p-8 text-center">
              <p className="text-sm text-foreground/80">Your cart is empty.</p>
            </div>
          )}
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-lg border border-black/10 bg-background p-5">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-foreground/80">Subtotal</span>
              <span className="font-medium">${totals.subtotal.toFixed(2)}</span>
            </div>
            {totals.discount > 0 && (
              <div className="flex items-center justify-between text-green-600">
                <span>Discount</span>
                <span>- ${totals.discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-foreground/80">Tax</span>
              <span className="font-medium">${totals.tax.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-foreground/80">Shipping</span>
              <span className="font-medium">${totals.shipping.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-black/10 pt-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${totals.total.toFixed(2)}</span>
            </div>
          </div>
          <a href="/checkout" className="mt-5 block w-full rounded-md bg-black px-4 py-3 text-center text-sm font-medium text-white hover:bg-black/90">
            Checkout
          </a>
          <p className="mt-2 text-center text-xs text-foreground/70">or continue shopping</p>
        </aside>
      </div>
    </main>
  );
}
