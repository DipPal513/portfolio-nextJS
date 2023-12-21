"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const menuVariants = {
  hidden: { x: "-1000vw" },
  visible: { x: -20 },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header -lg">
      <div className="main-header mx-auto max-w-screen-xl py-7 flex items-center justify-between px-3">
        <motion.div initial={{ x: "-100vw" }} animate={{ x: 0 }} className="flex w-full cursor-pointer md:w-auto items-center pr-4">
          <span className={`text-xl md:text-4xl font-bold mr-3 text-gray-300`}>{"< "}</span>
          <h4 className={`logo uppercase font-bold text-lg md:text-2xl`}>
            <Link href="/">{"Dip Pal"}</Link>
          </h4>
          <span className={`font-bold text-xl md:text-4xl ms-3 text-gray-400`}>{" />"}</span>
        </motion.div>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl" onClick={toggleMenu} aria-label="Toggle Menu">
          <RiMenu3Fill />
        </motion.button>
        <motion.ul
          className={`pt-24 flex-col items-center justify-center md:gap-x-4 fixed top-0 backdrop-blur-xl h-full text-white p-5 z-10 text-xl md:text-5xl md:gap-y-20 md:w-[80%] w-[100%] gap-y-5`}
          variants={menuVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          transition={{ type: "tween", stiffness: 500, duration: 0.2 }}
        >
          <button className="fixed top-5 right-5 text-2xl font-bold p-5 cursor-pointer" onClick={closeMenu} aria-label="Close Menu">
            <AiOutlineClose />
          </button>
          {["home", "about", "projects", "blogs", "contact"].map((el, index) => (
            <motion.li
              key={index}
              className="uppercase mb-10 md:mb-0 py-1 md:py-5 text-center"
              onClick={closeMenu}
              whileHover={{ scale: 1.1 }}
            >
              <Link href={el === "home" ? "/" : `/${el}`}>
                <span>{el}</span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Header;
