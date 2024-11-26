import React from "react";
import Image from "../assets/img.png";

const Hero = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center px-3 md:px-16">
      {/* Left Content */}
      <div className="absolute md:relative flex-1 space-y-6">
        <h1 className="text-2xl md:text-4xl  font-extrabold">
          Trade the <span className="text-green-500">Future</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-lg">
          Experience next-generation trading with AI-powered insights and real-time market analysis.
        </p>
        <div className="space-x-16">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg shadow-lg animate-glow transition duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex justify-center">
        <img
          src={Image} // Replace with your image URL
          alt="Trading visualization"
          className="h-[85vh] object-contain animate-float"
        />
      </div>
    </div>
  );
};

export default Hero;
