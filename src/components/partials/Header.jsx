import React from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="bg-white text-black p-4 ticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-ceneter space-x-2">
            <h1 className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-2xl ">
              Bubble Bliss
            </h1>
            <span className="flex justify-center items-center">🧋</span>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-200 transition">
              Home
            </a>
            <a href="#types" className="hover:text-blue-200 transition">
              Types
            </a>
            <a href="#toppings" className="hover:text-blue-200 transition">
              Toppings
            </a>
            <a href="#benifits" className="hover:text-blue-200 transition">
              Benefits
            </a>
            <a href="#contact" className="hover:text-blue-200 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
