import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaSearch,
} from "react-icons/fa";

const Footer = () => {
  const copyrightYear = new Date();
  return (
    <footer className="px-6 lg:px-16 space-y-6 md:space-y-0 mx-auto pt-24 pb-8 flex flex-col md:flex-row w-full justify-between md:items-center">
      <ul className="flex text-xl font-bold space-y-3 md:space-y-0 flex-col md:flex-row md:space-x-6">
        <li className="">
          <Link href={"#home"}>Home</Link>
        </li>
        <li className="">
          <Link href={"#about"}>About</Link>
        </li>
        <li className="">
          <Link href={"#services"}>Services</Link>
        </li>
        <li className="">
          <Link href={"#"}>Contact</Link>
        </li>
      </ul>
      <div className="flex space-x-4 opacity-60">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaPinterest />
      </div>
      <p className="">
        Copyright &copy; {copyrightYear.getFullYear()} | OLIVE GRACE
      </p>
    </footer>
  );
};

export default Footer;
