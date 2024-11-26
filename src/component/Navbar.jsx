// import React from "react";

// const Navbar = () => {

  

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

// const handleStartTrading = () => {
//   window.open("https://in.tradingview.com/pricing/?share_your_love=prajwalpal10", "_blank");
// };


//   return (
//     <nav className="flex items-center justify-between px-8 py-4 bg-black fixed w-full z-50 shadow-md">
//       {/* Left: Animated Text */}
//       <div className="text-sm md:text-2xl font-bold text-green-500 animate-zoom">
//         FusionVertx
//       </div>

//       {/* Center: Navigation Links */}
//       <div className="space-x-6">
//   <a
//     href="#hero"
//     className="text-white hover:text-green-400 relative group"
//   >
//     Home
//     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
//   </a>
//   <a
//     href="#services"
//     className="text-white hover:text-green-400 relative group"
//   >
//     Services
//     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
//   </a>
//   <a
//     href="#market"
//     className="text-white hover:text-green-400 relative group"
//   >
//     Market News
//     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
//   </a>
//   <a
//     href="#contact"
//     className="text-white hover:text-green-400 relative group"
//   >
//     Contact Us
//     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
//   </a>
// </div>


//       {/* Right: Glowing Button */}
//       <div>
//         <button
//          onClick={handleStartTrading}
//          className="invisible  md:visible px-6 py-2 text-white bg-green-500 rounded-md font-bold animate-glow hover:bg-green-400 transition duration-300">
//           Start Trading
//         </button>
//       </div>


  
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleStartTrading = () => {
  window.open("https://in.tradingview.com/pricing/?share_your_love=prajwalpal10", "_blank");
};

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black fixed w-full z-50 shadow-md">
      <div className="container text-white mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-sm md:text-2xl font-bold text-green-500 animate-zoom">
          <span className="hover:animate-zoom">FusionVertx</span>
        </div>

        {/* Center: Links for Desktop */}
        <div className="hidden md:flex space-x-8">
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

        {/* Right: Start Trading Button */}
        <div>
       <button
         onClick={handleStartTrading}
         className="invisible  md:visible px-6 py-2 text-white bg-green-500 rounded-md font-bold animate-glow hover:bg-green-400 transition duration-300">
          Start Trading
        </button>
      </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <div className={`h-1 w-6 bg-white rounded transition-transform ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
          <div className={`h-1 w-6 bg-white rounded my-1 transition-opacity ${menuOpen ? "opacity-0" : ""}`}></div>
          <div className={`h-1 w-6 bg-white rounded transition-transform ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-black text-white absolute top-16 left-0 w-full flex flex-col space-y-4 py-4 shadow-lg md:hidden">
          <a
            href="#hero"
            className="block text-center hover:text-green-500"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#services"
            className="block text-center hover:text-green-500"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#market#news"
            className="block text-center hover:text-green-500"
            onClick={toggleMenu}
          >
            Market News
          </a>
          <a
            href="#contact"
            className="block text-center hover:text-green-500"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
          <button
            className="bg-green-500 text-white py-2 px-6 mx-auto rounded-md"
            onClick={toggleMenu}
          >
            Start Trading
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
