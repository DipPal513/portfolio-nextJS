"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const menuVariants = {
  hidden: { left: "-1000vw",opacity:0 },
  visible: { left: 0 ,opacity:1},
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
useEffect(() => {
  
  window?.addEventListener("scroll",()=>{
    window?.scrollY > 150 ? setIsScroll(true) : setIsScroll(false);
  })
}, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`"header" ${isScroll && "sticky top-0 left-0 w-full backdrop-blur-2xl brightness-100 z-10"}`}>
      <div className="main-header mx-auto max-w-screen-xl py-7 flex items-center justify-between px-3">
        <motion.Link
          href={"/"}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          className="flex w-full cursor-pointer md:w-auto items-center pr-4"
        >
          <Image
            src="https://i.ibb.co/qx8F7pS/logo-no-background.png"
            alt="Header Logo"
            width={100}
            height={80}
          />
        </motion.Link>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl hover:text-[var(--main-color)] duration-200"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <RiMenu3Fill />
        </motion.button>
        <motion.ul
          className={`pt-24 flex-col items-center justify-center md:gap-x-4 fixed top-0 bg-[#000] h-[100vh] text-white p-5 z-10 text-xl md:text-5xl md:gap-y-20  w-[100%] gap-y-5 text-left sm:text-center`}
          variants={menuVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          transition={{ type: "tween",duration:.300 }}
        >
          <button
            className="absolute top-5 right-5 text-2xl font-bold p-5 cursor-pointer hover:text-[var(--main-color)] duration-200"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <AiOutlineClose />
          </button>
          {["home", "about", "skills", "projects", "blogs", "contact"].map(
            (el, index) => (
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
            )
          )}
        </motion.ul>
      </div>
    </div>
  );
};

export default Header;
