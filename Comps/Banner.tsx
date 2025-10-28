import Link from "next/link";

const Ban = () => {
  return (
    <div>
      <div className="relative bg-black">
        <img
          src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1761638798/category-03_zyx4qi.jpg"
          alt=""
          className="w-full h-[650px] object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 z-10  mt-29 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Timeless Fashion for the Modern Wardrobe</h1>
          <p className="mt-3 max-w-2xl text-base text-white/90 sm:text-lg">
            Discover timeless fashion for Men, Women, and Kids – crafted for comfort, designed for confidence.
          </p>
          <Link
            href="/shop"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
          >
            Shop Now
          </Link>
          <div className="mt-50 text-white"><h1>Get 15% off on your first order</h1></div>
        </div>
        
      </div>
    </div>
  );
};

export default Ban;