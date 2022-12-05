import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaSearch,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-orange-100 h-20 px-6 lg:px-16 flex items-center">
      <nav className="flex items-center justify-between w-full">
        <div className="flex space-x-4 opacity-60">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaPinterest />
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            <li className="">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="">
              <Link href={"/"}>About</Link>
            </li>
            <li className="text-3xl font-bold uppercase">
              <Link href={"/"}>OLIVE GRACE</Link>
            </li>
            <li className="">
              <Link href={"#services"}>Services</Link>
            </li>
            <li className="">
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="bg-transparent placeholder:italic px-4 py-3 focus:outline-none"
            placeholder="Search"
          />
          <FaSearch className="text-xl opacity-60" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
