import React, { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/70">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex justify-between ">
        <FaFacebook className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlus className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>

      {/* Hamberger Icon */}
      <div className="sm:hidden z-10">
        <FaBars onClick={handleNav} size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* Mobile menu */}
      <div
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-300"
        }
      >
        <ul className="h-full w-full text-center p-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
