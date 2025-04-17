"use client";
import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGithub, BsStackOverflow } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { RiFacebookCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mx-auto md:px-8 pb-7 pt-14 w-full flex flex-col items-center justify-center"
    >
      <ul className="flex space-x-5 px-5 bg-transparent items-center mb-3 text-xl mt-5">
        <motion.li
          initial={{ y: 0 }}
          whileHover={{ y: -10, scale: 1.3 }}
          transition={{ type: "tween" }}
          className="cursor-pointer"
        >
          <Link href="https://github.com/dipPal513" target="_blank">
            <BsGithub />{" "}
          </Link>
        </motion.li>
        <motion.li
          initial={{ y: 0 }}
          whileHover={{ y: -10, scale: 1.3 }}
          transition={{ type: "tween" }}
          className="cursor-pointer"
        >
          <Link
            href="https://stackoverflow.com/users/13574278/pritom-paul-dip"
            target="_blank"
          >
            <BsStackOverflow />{" "}
          </Link>
        </motion.li>
        <motion.li
          initial={{ y: 0 }}
          whileHover={{ y: -10, scale: 1.3 }}
          transition={{ type: "tween" }}
          className="cursor-pointer"
        >
          <Link href="https://web.facebook.com/DipPal513/" target="_blank">
            <RiFacebookCircleFill />{" "}
          </Link>
        </motion.li>
        <motion.li
          initial={{ y: 0 }}
          whileHover={{ y: -10, scale: 1.3 }}
          transition={{ type: "tween" }}
          className="cursor-pointer"
        >
          <Link
            href="https://www.linkedin.com/in/dip-pal-107a8a203/"
            target="_blank"
          >
            <GrLinkedin />{" "}
          </Link>
        </motion.li>
      </ul>
      <p className="mt-4">
        {" "}
        &copy; {new Date().getFullYear()} Dip Pal All rights reserved.
      </p>
    </motion.footer>
  );
};
export default Footer;
