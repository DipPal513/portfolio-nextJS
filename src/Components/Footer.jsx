"use client";
import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { RiFacebookCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mx-auto md:px-8 py-5 w-full flex flex-col items-center justify-center"
    >
      <ul className="flex space-x-5 px-5 bg-transparent items-center mb-3 text-xl">
        <li>
          <Link href="https://github.com/dipPal513" target="_blank">
            <BsGithub />{" "}
          </Link>
        </li>
        <li>
          <Link href="https://github.com/dipPal513" target="_blank">
            <AiFillTwitterCircle />{" "}
          </Link>
        </li>
        <li>
          <Link href="https://web.facebook.com/DipPal513/" target="_blank">
            <RiFacebookCircleFill />{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/dip-pal-107a8a203/"
            target="_blank"
          >
            <GrLinkedin />{" "}
          </Link>
        </li>
      </ul>
      <p> &copy; {new Date().getFullYear()} Dip Pal All rights reserved.</p>
    </motion.footer>
  );
};
export default Footer;
