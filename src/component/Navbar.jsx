import React from "react";

const Navbar = () => {


const handleStartTrading = () => {
  window.open("https://in.tradingview.com/pricing/?share_your_love=prajwalpal10", "_blank");
};


  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black fixed w-full z-50 shadow-md">
      {/* Left: Animated Text */}
      <div className="text-2xl font-bold text-green-500 animate-zoom">
        FusionVertx
      </div>

      {/* Center: Navigation Links */}
      <div className="space-x-6">
  <a
    href="#hero"
    className="text-white hover:text-green-400 relative group"
  >
    Home
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
  <a
    href="#services"
    className="text-white hover:text-green-400 relative group"
  >
    Services
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
  <a
    href="#market"
    className="text-white hover:text-green-400 relative group"
  >
    Market News
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
  <a
    href="#contact"
    className="text-white hover:text-green-400 relative group"
  >
    Contact Us
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
</div>


      {/* Right: Glowing Button */}
      <div>
        <button
         onClick={handleStartTrading}
         className="px-6 py-2 text-white bg-green-500 rounded-md font-bold animate-glow hover:bg-green-400 transition duration-300">
          Start Trading
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
