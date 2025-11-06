
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
            <div className="flex items-center space-x-4 mt-4 justify-center md:justify-start">
              <a
                href="https://res.cloudinary.com/dp5gnnji3/image/upload/v1762419302/facebook-svgrepo-com_3_kaj8vb.svg"
                aria-label="Facebook"
                className="text-gray-500 hover:text-indigo-600"
              >
                <Image
                  src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1762419305/instagram-svgrepo-com_gdjkql.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a> 
              <a
                href="https://res.cloudinary.com/dp5gnnji3/image/upload/v1762419300/whatsapp-svgrepo-com_e3hdsp.svg"
                aria-label="whatsapp"
                className="text-gray-500 hover:text-indigo-600"
              >
                <Image
                  src="#"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-indigo-600"
              >
                <Image
                  src=""
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </div>
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
