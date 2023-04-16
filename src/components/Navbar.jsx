import React from "react";

const Navbar = () => {
  return (
    <div className="navbar h-[50px] bg-[#003580] flex justify-center">
      <div className="nav-container w-full max-w-[1024px] text-white">
        <span className="logo">Wisebooking</span>
        <div className="nav-items">
          <button className="nav-button">Register</button>
          <button className="nav-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
