import React from "react";

const Navbar = () => {
  return (
    <div className="text-neutral-500 flex justify-between items-center fixed w-1/2 px-10 py-6 rounded-full translate-1/2 backdrop-blur-sm z-50">
      <div className="hover:text-white transition-all duration-100 cursor-pointer">
        Home
      </div>
      <div className="hover:text-white transition-all duration-100 cursor-pointer">
        About Us
      </div>
      <div className="hover:text-white transition-all duration-100 cursor-pointer">
        Core Team
      </div>
      <div className="hover:text-white transition-all duration-100 cursor-pointer">
        Sponsor Page
      </div>
      <div className="hover:text-white transition-all duration-100 cursor-pointer">
        Footer
      </div>
    </div>
  );
};

export default Navbar;
