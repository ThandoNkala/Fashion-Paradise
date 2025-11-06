"use client";
import Link from "next/link";
import { useCart } from "./cart/CartProvider";

type Item = {
  id: string;
  name: string;
  price: string;
  image: string;
  colors: string[];
  sizes: string[];
};

const items: Item[] = [
  {
    id: "1",
    name: "Men's Classic Jacket",
    price: "$89.00",
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1761643136/polo-tshirt-400x465_hnzplh.jpg",
    colors: ["#111827", "#4B5563", "#D1D5DB"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "Women's Linen Dress",
    price: "$74.00", 
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1761643143/1-300x349_iyzqyx.png",
    colors: ["#DC2626", "#10B981", "#F59E0B"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "3",
    name: "Kids' Everyday Hoodie",
    price: "$39.00",
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1761638798/category-03_zyx4qi.jpg",
    colors: ["#2563EB", "#22C55E", "#F59E0B"],
    sizes: ["4", "6", "8", "10"],
  },
];

const NewA = () => {
  const { addItem } = useCart();
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold sm:text-2xl">New Arrivals</h2>
        <Link
          href="/shop/new"
          className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium hover:bg-black/5"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.id} className="overflow-hidden rounded-lg border border-black/10 bg-background">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
              <img src={it.image} alt={it.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-medium">{it.name}</h3>
                  <p className="mt-1 text-sm text-foreground/80">{it.price}</p>
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-foreground/70">Colors:</span>
                  <div className="flex items-center gap-2">
                    {it.colors.map((c, idx) => (
                      <span
                        key={idx}
                        className="inline-block h-4 w-4 rounded-full border border-black/10"
                        style={{ backgroundColor: c }}
                        aria-label={`Color ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-foreground/70">Sizes:</span>
                  <div className="flex flex-wrap items-center gap-2">
                    {it.sizes.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center justify-center rounded border border-black/10 px-2 py-0.5 text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <button
                  className="inline-flex flex-1 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
                  onClick={() =>
                    addItem({
                      id: it.id,
                      name: it.name,
                      image: it.image,
                      price: parseFloat(it.price.replace(/[^0-9.]/g, "")) || 0,
                      color: it.colors?.[0],
                      size: it.sizes?.[0],
                      qty: 1,
                    })
                  }
                >
                     Add to Cart
                </button>
                <Link
                  href={`/product/${it.id}`}
                  className="inline-flex items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium hover:bg-black/5"
                >
                  More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewA;
