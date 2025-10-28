"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [query, setQuery] = useState("");
  const cartCount = 0;

  return (
    <header className="w-full border-b border-black/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open menu"
              className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
              </svg>
            </button>
            <Link href="/" className="flex  items-center gap-2 text-foreground">
            <span className="text-xl font-semibold"> <img src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1761640252/ChatGPT_Image_Oct_28__2025__10_25_02_AM-removebg-preview_advfyo.png" alt="" width={80} height={80}/></span>
            </Link>
            <div className="relative hidden lg:block">
              <button
                onClick={() => setCategoriesOpen((v) => !v)}
                aria-expanded={categoriesOpen}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-black/5"
              >
                <span>Categories</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M12 14.25a.75.75 0 0 1-.53-.22l-5-5a.75.75 0 1 1 1.06-1.06L12 12.44l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-.53.22Z" clipRule="evenodd" />
                </svg>
              </button>
              {categoriesOpen && (
                <div className="absolute z-20 mt-2 w-56 rounded-md border border-black/10 bg-background p-2 shadow-lg">
                  <div className="grid grid-cols-1">
                    <Link href="/category/new" className="rounded px-3 py-2 text-sm hover:bg-black/5">New Arrivals</Link>
                    <Link href="/category/men" className="rounded px-3 py-2 text-sm hover:bg-black/5">Men</Link>
                    <Link href="/category/women" className="rounded px-3 py-2 text-sm hover:bg-black/5">Women</Link>
                    <Link href="/category/electronics" className="rounded px-3 py-2 text-sm hover:bg-black/5">Electronics</Link>
                    <Link href="/category/home" className="rounded px-3 py-2 text-sm hover:bg-black/5">Home</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden flex-1 items-center justify-center px-6 lg:flex">
            <form action="/search" className="w-full max-w-xl">
              <div className="flex items-center overflow-hidden rounded-md border border-black/10 bg-white text-black">
                <input
                  name="q"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products"
                  className="w-full px-3 py-2 outline-none"
                />
                <button type="submit" className="inline-flex items-center gap-2 bg-black px-3 py-2 text-sm font-medium text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 3.991 12.22l3.77 3.77a.75.75 0 1 0 1.06-1.06l-3.77-3.77A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" clipRule="evenodd" />
                  </svg>
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link href="/shop" className="hidden rounded-md px-3 py-2 text-sm hover:bg-black/5 lg:inline-block">Shop</Link>
            <Link href="/deals" className="hidden rounded-md px-3 py-2 text-sm hover:bg-black/5 lg:inline-block">Deals</Link>
            <Link href="/about" className="hidden rounded-md px-3 py-2 text-sm hover:bg-black/5 lg:inline-block">About</Link>
            <Link href="/account" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-black/5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.75 20.1a8.25 8.25 0 1 1 16.5 0 .9.9 0 0 1-.9.9H4.65a.9.9 0 0 1-.9-.9Z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">Account</span>
            </Link>
            <Link href="/cart" className="relative inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-black/5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M2.25 3a.75.75 0 0 1 .75-.75h1.432a1.5 1.5 0 0 1 1.415 1.036l.432 1.295h12.727a1.5 1.5 0 0 1 1.451 1.842l-1.2 5.4a1.5 1.5 0 0 1-1.451 1.158H8.25a1.5 1.5 0 0 1-1.415-1.036L5.25 5.25H3a.75.75 0 0 1-.75-.75Z" />
                <path d="M8.25 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-xs font-medium text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 border-t border-black/10 py-3">
              <details>
                <summary className="cursor-pointer px-3 py-2 text-sm">Categories</summary>
                <div className="px-3 pb-2 pt-1">
                  <div className="grid grid-cols-1">
                    <Link href="/category/new" className="rounded px-3 py-2 text-sm hover:bg-black/5">New Arrivals</Link>
                    <Link href="/category/men" className="rounded px-3 py-2 text-sm hover:bg-black/5">Men</Link>
                    <Link href="/category/women" className="rounded px-3 py-2 text-sm hover:bg-black/5">Women</Link>
                    <Link href="/category/electronics" className="rounded px-3 py-2 text-sm hover:bg-black/5">Electronics</Link>
                    <Link href="/category/home" className="rounded px-3 py-2 text-sm hover:bg-black/5">Home</Link>
                  </div>
                </div>
              </details>
              <form action="/search" className="px-3">
                <div className="flex items-center overflow-hidden rounded-md border border-black/10 bg-white text-black">
                  <input
                    name="q"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products"
                    className="w-full px-3 py-2 outline-none"
                  />
                  <button type="submit" className="inline-flex items-center gap-2 bg-black px-3 py-2 text-sm font-medium text-white">Go</button>
                </div>
              </form>
              <div className="grid grid-cols-1 gap-1 px-1">
                <Link href="/shop" className="rounded-md px-3 py-2 text-sm hover:bg-black/5">Shop</Link>
                <Link href="/deals" className="rounded-md px-3 py-2 text-sm hover:bg-black/5">Deals</Link>
                <Link href="/about" className="rounded-md px-3 py-2 text-sm hover:bg-black/5">About</Link>
                <Link href="/account" className="rounded-md px-3 py-2 text-sm hover:bg-black/5">Account</Link>
                <Link href="/cart" className="rounded-md px-3 py-2 text-sm hover:bg-black/5">Cart</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

