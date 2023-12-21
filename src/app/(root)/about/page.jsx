"use client";
import Alert from "@/Components/Alert";
import PageHeader from "@/Components/PageHeader";
import PrimaryButton from "@/Components/PrimaryButton";
import Weidgs from "@/Components/Weidgs";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import hover3d from "@/utils/hover";
// import { useContext } from "react";
// import { GlobalContext } from "@/contexts/ContextProvider";
const AboutMe = () => {
  const hero = useRef(null);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };
  const imageHover = hover3d(hero, {
    x: 4,
    y: 5,
    z: 15,
  });

  // const secRef = React.useRef<HTMLDivElement>(null);
  return (
    <div
      className="aboutme py-8 relative"
      onMouseMove={(e) => updateCursorPosition(e)}
    >
      <Alert />
      <Weidgs
        customClass={"rightWeidgs"}
        position={{
          right: "15%",
          top: `40%`,
          background: "var(--main-color)",
          width: "200px",
          height: "200px",
        }}
      ></Weidgs>

      <Weidgs
        customClass={"leftWeidgs"}
        position={{
          left: `${cursorPos.x / 90}%`,
          top: `${cursorPos.y / 100}%`,
          background: "yellow",
          borderRadius: "0%",
        }}
      />

      <div className="max-w-screen-lg mx-auto flex flex-col space-y-10 ">
        <PageHeader
          title="about me"
          description=" Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
        />
        <div className="md:flex items-center justify-between gap-x-10">
          <div className="left-about mb-5 md:mb-0 px-4 md:px-0">
            <h4 className="font-bold capitalize mb-3 text-3xl">
              get to know me
            </h4>
            <p className="text-white text-lg mb-5">
              I'm a full-stack web wizard with 2+ years of experience sculpting
              digital experiences. Passionate about pixel-perfect design and
              coding magic, I craft frontend wonders that elevate products. I'm
              a proud member of the Dev Community, sharing insights and chasing
              the thrill of continual growth. Let's build something
              extraordinary together!
            </p>
            <PrimaryButton className="" text="Connect" />{" "}
          </div>
          <div className="px-5 md:px-0"ref={hero}>
            <motion.img
              
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "tween", duration: 0.5 }}
              style={{
                transform: imageHover.transform,
              }}
              src="https://i.ibb.co/d67c1tF/Dippal-3.jpg"
              alt="Dippal-3"
              className="md:w-3/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
