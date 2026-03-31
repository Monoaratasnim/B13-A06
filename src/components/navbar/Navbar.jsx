import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white border border-[#F2F2F2]">
      <div className="flex items-center justify-between px-12.5 py-5">

        {/* 🔹 LEFT */}
        <div className="shrink-0">
          <a className="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>

        {/* 🔹 CENTER (hidden on small screens) */}
        <div className="flex-1 justify-center hidden lg:flex">
          <ul className="flex gap-8 text-sm font-medium text-gray-600">
            <li><a className="hover:text-black">Products</a></li>
            <li><a className="hover:text-black">Features</a></li>
            <li><a className="hover:text-black">Pricing</a></li>
            <li><a className="hover:text-black">Testimonials</a></li>
            <li><a className="hover:text-black">FAQ</a></li>
          </ul>
        </div>

        {/* 🔹 RIGHT */}
        <div className="flex items-center gap-5">

          {/* Cart (hidden on very small screens if needed) */}
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 cursor-pointer"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5" />
          </svg>

          {/* Login */}
          <a className="text-sm font-medium text-gray-600 hover:text-black cursor-pointer hidden sm:inline">
            Login
          </a>

          {/* Button */}
          <button className="px-6 py-2 rounded-full text-white text-sm font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] hidden sm:inline">
            Get Started
          </button>

          {/* Hamburger Menu (only on small screens) */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>

      {/* 🔹 Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-12.5 pb-5">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-600">
            <li><a className="hover:text-black">Products</a></li>
            <li><a className="hover:text-black">Features</a></li>
            <li><a className="hover:text-black">Pricing</a></li>
            <li><a className="hover:text-black">Testimonials</a></li>
            <li><a className="hover:text-black">FAQ</a></li>
            <li><a className="hover:text-black">Login</a></li>
            <li>
              <button className="w-full px-6 py-2 rounded-full text-white text-sm font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default Navbar;