"use client";
import { useState } from "react";
import { useCart } from "@/Comps/cart/CartProvider";

export default function BankTransferPage() {
  const { cart, totals, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);

  function placeOrder() {
    // In a real app, create an order and show bank details + reference.
    setSubmitted(true);
    clear();
  }

  if (submitted) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold">Bank Transfer Instructions</h1>
        <p className="mt-2 text-sm text-foreground/80">
          Thank you! Your order request has been received. Please transfer the total amount to the bank
          account below and include your email as the payment reference.
        </p>
        <div className="mt-6 rounded-lg border border-black/10 bg-background p-5">
          <ul className="text-sm leading-7">
            <li><strong>Bank:</strong> Example Bank</li>
            <li><strong>Account Name:</strong> Thatoo's Deals</li>
            <li><strong>Account Number:</strong> 123456789</li>
            <li><strong>Branch Code:</strong> 000-000</li>
            <li><strong>Amount:</strong> ${totals.total.toFixed(2)}</li>
          </ul>
        </div>
        <p className="mt-4 text-sm text-foreground/80">We will confirm your order once the payment reflects.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold">Bank Transfer</h1>
      <p className="mt-2 text-sm text-foreground/80">Review your total and place an order via bank transfer.</p>

      <div className="mt-6 rounded-lg border border-black/10 bg-background p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground/80">Total Due</span>
          <span className="text-lg font-semibold">${totals.total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={placeOrder}
        className="mt-6 w-full rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
      >
        Place Order
      </button>
    </main>
  );
}
