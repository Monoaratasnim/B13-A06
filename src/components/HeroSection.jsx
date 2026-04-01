import React from "react";
import banner from "../assets/banner.png"; // Replace with your banner image path
import play from "../assets/play.png";
const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      {/* Hero Container */}
      <div className="max-w-300 mx-auto px-6 lg:px-16 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div className="flex flex-col gap-4">
        {/* Badge with dot */}<div>
<span className="inline-flex items-center text-purple-700 bg-[#c5d6e4] rounded-full text-sm font-medium px-1 py-0.5">
  <span className="w-2 h-2 bg-purple-700  rounded-full mr-1 ml-1 shrink-0"></span>
  <span className="px-1 py-1">New: AI-Powered Tools Available</span>
</span></div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Supercharge Your Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg lg:text-xl">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="px-6 py-3 rounded-full bg-purple-700 text-white font-medium hover:opacity-90 transition">
              Explore Products
            </button>
    <button className="px-6 py-3 rounded-full border border-purple-700 text-purple-700 font-medium hover:bg-purple-50 transition flex items-center gap-2">
      <img 
       src={play} 
       alt="play" 
       className="w-4 h-4 object-contain" />                                            
             Watch Demo</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img src={banner} alt="Digital Workflow" className="w-full max-w-lg object-cover rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-linear-to-r from-purple-600 to-purple-400 py-10 mt-12">
        <div className="max-w-300 mx-auto flex flex-col sm:flex-row justify-around items-center text-white text-center gap-6">
          <div>
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="text-sm">Active Users</p>
          </div>
          <div className="border-l border-white h-10 hidden sm:block"></div>
          <div>
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="text-sm">Premium Tools</p>
          </div>
          <div className="border-l border-white h-10 hidden sm:block"></div>
          <div>
            <h2 className="text-3xl font-bold">4.9</h2>
            <p className="text-sm">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;