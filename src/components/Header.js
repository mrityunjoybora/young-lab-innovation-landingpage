import React from "react";
import logo from "../images/YoungLabsLogo.webp";

function Header() {
  return (
    <header className="flex justify-between items-center lg:px-20 md:px-16 sm:px-10 px-6 py-4 shadow-md z-50 sticky top-0 bg-white">
      <img className="h-12 cursor-pointer" src={logo} alt="" />
      <button className="font-semibold bg-lime-500 hover:bg-lime-400 cursor-pointer px-4 py-1 rounded-lg text-white text-lg">
        Login
      </button>
    </header>
  );
}

export default Header;
