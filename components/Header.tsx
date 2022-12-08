import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaSearch,
  FaBars,
  FaRegWindowClose,
} from "react-icons/fa";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="bg-orange-100 h-20 px-6 lg:px-16 flex items-center">
      <nav className="flex items-center justify-between w-full">
        <div className="w-full md:w-auto flex justify-between">
          <div
            className={`flex space-x-4 z-50 ${
              navOpen ? "opacity-100" : "opacity-60"
            }`}>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
          </div>
          <div className="sm:hidden z-50">
            {navOpen ? (
              <FaRegWindowClose
                onClick={() => setNavOpen(!navOpen)}
                className="text-xl"
              />
            ) : (
              <FaBars
                onClick={() => setNavOpen(!navOpen)}
                className="text-xl"
              />
            )}
          </div>
        </div>
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-white z-[1] px-6 py-28 text-xl font-bold space-y-4 ${
            navOpen ? "translate-x-0" : "translate-x-full"
          } duration-300`}>
          <li className="">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="">
            <Link href={"#about"}>About</Link>
          </li>
          <li className="">
            <Link href={"#services"}>Services</Link>
          </li>
          <li className="">
            <Link href={"#contact"}>Contact</Link>
          </li>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="placeholder:italic px-4 py-3 focus:outline-none border flex-1"
              placeholder="Search"
            />
            <FaSearch className="text-xl opacity-60" />
          </div>
        </ul>
        <div className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            <li className="">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="">
              <Link href={"#about"}>About</Link>
            </li>
            <li className="text-3xl font-bold uppercase">
              <Link href={"#"}>OLIVE GRACE</Link>
            </li>
            <li className="">
              <Link href={"#services"}>Services</Link>
            </li>
            <li className="">
              <Link href={"#contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="sm:flex items-center hidden space-x-4">
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
