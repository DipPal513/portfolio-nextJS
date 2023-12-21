"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

import "../app/styles/Header.css";
import Weidgs from "./Weidgs";
// import {useRef} from 'react';
const Banner = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="banner flex items-center justify-center flex-col py-5 h-[80vh] space-y-9 text-center relative"
      onMouseMove={(e) => updateCursorPosition(e)}

      // style={{
      //   background:
      //     "linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)",
      //   backgroundPosition: "center",

      //   position: "relative",
      // }}
    >
      <Weidgs
        customClass={"leftWeidgs"}
        position={{
          left: 0 + (cursorPos.y / 5 + 10),
          top: 20 + cursorPos.x / 5,
        }}
        animate={{ background: "red" }}
      ></Weidgs>

      <Weidgs
        customClass={"rightWeidgs"}
        position={{
          right: "30%",
          top: 20 + cursorPos.y / 5,
          background: "magenta",
          borderRadius: "50%",
          width: "150px",
          height: "150px",
        }}
      ></Weidgs>
      <Weidgs
        customclassName={"rightWeidgs"}
        position={{ right: "10%", top: "80%", marginLeft: `${cursorPos.x}` }}
      ></Weidgs>

      <div className="content">
        <div className="content__container">
          <p className="content__container__text">Hello</p>

          <ul className="content__container__list">
            <li className="content__container__list__item">world !</li>
            <li className="content__container__list__item">coder !</li>
            <li className="content__container__list__item">users !</li>
            <li className="content__container__list__item">uiverse</li>
          </ul>
        </div>
      </div>
      <motion.h4
        className="text-4xl font-bold mt-0 font-mono"
        initial={{ y: "-10", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        I am Dip
      </motion.h4>

      <p className="text-xl text-white font-semibold px-4 md:px-0 md:w-3/6 mt-5">
        A Full-Stack Web Developer building the Websites and Web Applications
        that leads to the success of the overall product
      </p>
      {/* <button className="main-button">Projects</button> */}
      <div className="flex items-center gap-x-2 md:gap-x-5">
        <PrimaryButton
          text="Resume"
          customclassName={"m-[0 !important]"}
          link={
            "https://drive.google.com/file/d/1uH7dNgsZ-255l9d1d0NsL280I_N2UnVk/view"
          }
          target="_blank"
        />
        <PrimaryButton
          text="Hire"
          link="https://www.linkedin.com/in/dippal513/"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Banner;
