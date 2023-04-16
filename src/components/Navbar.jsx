import React from "react";

const Navbar = () => {
  return (
    <div className="navbar h-[50px] bg-[#003580] flex justify-center">
      <div className="nav-container w-full max-w-[1024px] text-white flex items-center justify-between">
        <span className="logo font-medium">Wisebooking</span>
        <div className="nav-items flex gap-2">
          <button className="nav-button px-2 bg-white text-[#003580]">
            Register
          </button>
          <button className="nav-button px-2 bg-white text-[#003580]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
