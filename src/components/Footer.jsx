const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-300 pt-16">

      {/* 🔹 Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

        {/* 🔹 Left Section */}
        <div className="lg:col-span-2 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-white mb-4">DigiTools</h2>
          <p className="text-sm text-gray-400 leading-6 max-w-sm mx-auto lg:mx-0">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* 🔹 Product */}
        <div className="text-center lg:text-left">
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        {/* 🔹 Company */}
        <div className="text-center lg:text-left">
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* 🔹 Resources */}
        <div className="text-center lg:text-left">
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* 🔹 Social Links */}
        <div className="text-center lg:text-left">
          <h3 className="text-white font-semibold mb-4">Social Links</h3>

          <div className="flex gap-3 justify-center lg:justify-start">

            {/* YouTube */}
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-black hover:scale-110 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M19.6 6.2c-.2-.8-.8-1.4-1.6-1.6C16.4 4 12 4 12 4s-4.4 0-6 .6c-.8.2-1.4.8-1.6 1.6C4 7.8 4 12 4 12s0 4.2.4 5.8c.2.8.8 1.4 1.6 1.6 1.6.6 6 .6 6 .6s4.4 0 6-.6c.8-.2 1.4-.8 1.6-1.6.4-1.6.4-5.8.4-5.8s0-4.2-.4-5.8zM10 15.5v-7l6 3.5-6 3.5z"/>
              </svg>
            </div>

            {/* Facebook */}
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-black hover:scale-110 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.5v-3h2.5v-2.3c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12h2.8l-.4 3h-2.4v7A10 10 0 0022 12z"/>
              </svg>
            </div>

            {/* X */}
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-black hover:scale-110 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M18.9 3H21l-6.5 7.4L22 21h-6.9l-5.4-7.1L3.8 21H1.7l7-8L2 3h7l4.9 6.5L18.9 3zm-2.4 16h1.9L7.6 5H5.6l10.9 14z"/>
              </svg>
            </div>

          </div>
        </div>

      </div>

      {/*  Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6 
          flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 text-center md:text-left">
          
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;