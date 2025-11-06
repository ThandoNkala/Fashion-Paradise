"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/Comps/cart/CartProvider";

export default function CheckoutPage() {
  const { cart, totals } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function payWithStripe() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.items.map((it) => ({
            name: it.name,
            image: it.image,
            unit_amount: Math.round(it.price * 100),
            quantity: it.qty,
          })),
          cartId: cart.id,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Failed: ${res.status}`);
      }
      const data = (await res.json()) as { url: string };
      window.location.href = data.url;
    } catch (e: any) {
      setError(e?.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <p className="mt-2 text-sm text-foreground/80">Choose your preferred payment method.</p>

      <div className="mt-8 rounded-lg border border-black/10 bg-background p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground/80">Items</span>
          <span className="text-sm font-medium">{cart.items.length}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-foreground/80">Total</span>
          <span className="text-lg font-semibold">${totals.total.toFixed(2)}</span>
        </div>
      </div>

      {error && (
        <div className="mt-4 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">{error}</div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <button
          onClick={payWithStripe}
          disabled={loading || cart.items.length === 0}
          className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Redirecting..." : "Pay with Stripe"}
        </button>

        <Link
          href="/checkout/bank"
          className="inline-flex items-center justify-center rounded-md border border-black/10 px-6 py-3 text-sm font-medium hover:bg-black/5"
        >
          Pay via Bank Transfer
        </Link>
      </div>

      
    </main>
  );
}
