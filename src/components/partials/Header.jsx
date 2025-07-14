import React from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-white text-black p-4 ticky top-0 z-50 shadow-lg ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-ceneter space-x-2">
            <h1 className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-2xl ">
              Bubble Bliss
            </h1>
            <span className="flex justify-center items-center text-2xl">
              🧋
            </span>
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
          <button
            className="md:hidden text-xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
        fixed inset-0 bg-pink-200 z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
      >
        <div className="flex flex-col items-center space-y-8 text-white text-2xl">
          <a
            href="#home"
            className="hover:text-white-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#types"
            className="hover:text-white-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Types
          </a>
          <a
            href="#toppings"
            className="hover:text-white-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Toppings
          </a>
          <a
            href="#benefits"
            className="hover:text-white-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </a>
          <a
            href="#contact"
            className="hover:text-white-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
