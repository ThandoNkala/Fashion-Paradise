
import Image from "next/image";

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-gray-200 text-center md:text-left items-start">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1761640252/ChatGPT_Image_Oct_28__2025__10_25_02_AM-removebg-preview_advfyo.png"
              alt="logo"
              width={160}
              height={50}
              className="mb-3"
            />
           
          </div>

          <div className="md:text-left">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-indigo-600">Home</a></li>
              <li><a href="#" className="hover:text-indigo-600">Shop</a></li>
              <li><a href="#" className="hover:text-indigo-600">Deals</a></li>
              <li><a href="#" className="hover:text-indigo-600">About</a></li>
            </ul>
          </div>

          <div className="md:text-left">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Shop</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/technology" className="hover:text-indigo-600">Mens wear</a></li>
              <li><a href="/gadget" className="hover:text-indigo-600">Womens wear</a></li>
              <li><a href="/software" className="hover:text-indigo-600">kids wear</a></li>
              <li><a href="/games" className="hover:text-indigo-600">Accessories</a></li>
            </ul>
          </div>

          <div className="md:text-left">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">My Profile</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-indigo-600">My Account</a></li>
              <li><a href="#" className="hover:text-indigo-600">Track Order</a></li>
              <li><a href="#" className="hover:text-indigo-600">My Cart</a></li>
              <li><a href="#" className="hover:text-indigo-600">Order History</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center py-6 text-gray-600 text-sm">
          <span>Copyright © 2025 Fashion Paradise.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
