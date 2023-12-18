import Link from "next/link";
import React, { useState } from "react";
import { Press_Start_2P, Michroma } from "next/font/google";import { RiMenu3Fill } from "react-icons/ri";


const fontArrow = Michroma({
  weight: "400",
  subsets: ["latin"],
});
const logo = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };



  return (
    <div className="header -lg dark:bg-gray-700">
      <div className="main-header mx-auto max-w-screen-xl py-7 flex items-center justify-between px-3">
        <div className="flex w-full md:w-auto items-center">
          <span
            
            className={`text-4xl font-bold mr-3 text-gray-300 ${fontArrow.className}`}
          >
            {"< "}
          </span>
          <h4 className={`logo uppercase font-bold text-xl md:text-2xl ${logo.className}`}>
            {"Dip Pal"}
          </h4>
          <span
            onClick={toggleMenu}
            className={`font-bold text-4xl ms-3 text-gray-400 ${fontArrow.className}`}
          >
            {" />"}
          </span>
        </div>
        <button className="md:hidden text-4xl" onClick={() =>setIsMenuOpen(!isMenuOpen)}><RiMenu3Fill /></button>
        <ul
          className={`md:flex items-center md:gap-x-4 fixed top-0 bg-red-500  h-full text-white p-5 z-10 justify-center text-xl gap-y-8 w-[80%] ${ 
            isMenuOpen ? "left-0" : "-left-full"}`}
        >
          {["home", "about", "projects", "blogs", "contact"].map((el, index) => (
            <li
              key={index}
              className="uppercase mb-2 md:mb-0"
              onClick={closeMenu}
            >
              <Link href={`/${"home" ? "/": el}`}>
                <span>{el}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
