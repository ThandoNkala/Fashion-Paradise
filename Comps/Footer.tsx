
const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-gray-200">
        
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-3">
              <div
                aria-hidden
                className="flex items-center justify-center rounded-md bg-black text-white font-bold w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              >
                P
              </div>
              <div>
                <span className="text-lg sm:text-xl font-semibold block">Fashion Paradise</span>
                <span className="text-sm text-gray-500 block">Style for everyone</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-500 hover:text-indigo-600"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.95v-7.05H8.9v-2.9h1.54V9.41c0-1.52.9-2.36 2.28-2.36.66 0 1.35.12 1.35.12v1.49h-.76c-.75 0-.98.46-.98.94v1.12h1.67l-.27 2.9h-1.4v7.05C18.34 21.19 22 17.06 22 12.07z"/>
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-500 hover:text-indigo-600"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm6.2-2.7a1.05 1.05 0 11-1.05-1.05 1.05 1.05 0 011.05 1.05z"/>
                </svg>
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="text-gray-500 hover:text-indigo-600"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.5 3.5A11.9 11.9 0 0012 1C6 1 1 6 1 12a11.8 11.8 0 001.6 6L1 23l4.2-1.4A11.9 11.9 0 0012 23c6 0 11-5 11-11 0-1.9-.5-3.6-1.5-5.1zM12 20a8 8 0 01-4.2-1.2l-.3-.2-2.5.8.8-2.4-.2-.3A8 8 0 1112 20zm3.9-5.6c-.2-.1-1.2-.6-1.4-.6s-.4 0-.6.1-.4.1-.6-.1c-.2-.2-.8-.7-1.6-1.6-.6-.6-.9-1-.1-1.7.6-.6.2-1-.1-1.3-.3-.3-.6-.6-1-.9-.3-.2-.7-.3-1-.3s-1 .1-1.5.8c-.6.9.2 2.1 1 3.1 1 .9 1.8 1.5 2.3 1.9.6.4 1 1.1.7 1.7-.3.6-1 .9-1.7 1.2-.7.2-1.6.2-2.6-.2-1.8-.7-3.1-2.6-3.5-4.4-.4-2 .3-4 1.9-5.2 1.6-1.3 3.9-1.3 5.5-.8 1.6.6 2.6 1.9 2.9 3.2.3 1.2-.1 2.2-.8 2.6z"/>
                </svg>
              </a>
            </div>
          </div>

        
          <div className="md:text-left text-center">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-indigo-600">Home</a></li>
              <li><a href="#" className="hover:text-indigo-600">Shop</a></li>
              <li><a href="#" className="hover:text-indigo-600">Deals</a></li>
              <li><a href="#" className="hover:text-indigo-600">About</a></li>
            </ul>
          </div>

        
          <div className="md:text-left text-center">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Shop</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/technology" className="hover:text-indigo-600">Mens wear</a></li>
              <li><a href="/gadget" className="hover:text-indigo-600">Womens wear</a></li>
              <li><a href="/software" className="hover:text-indigo-600">Kids wear</a></li>
              <li><a href="/games" className="hover:text-indigo-600">Accessories</a></li>
            </ul>
          </div>

          
          <div className="md:text-left text-center">
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
