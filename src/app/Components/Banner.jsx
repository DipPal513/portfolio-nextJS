import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="banner flex items-center justify-center flex-col py-5 h-[80vh] space-y-9 text-center relative"
      style={{
        background:
          "linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)",
        backgroundPosition: "center",

        position: "relative",
      }}
    >
      {/* <h1 className=" text-8xl font-bold">HEY, I'M Pritom Paul Dip</h1> */}
      <h2 className="my-h2">
        Pritom Paul Dip
        <span>Pritom Paul Dip</span>
        <span>Pritom Paul Dip</span>
        <span>Front-End Web Developer</span>
      </h2>
      <p className="text-xl text-blue-950 font-semibold w-3/6">
        A Frontend focused Web Developer building the Frontend of Websites and
        Web Applications that leads to the success of the overall product
      </p>
      <button className="main-button">Projects</button>
      <ul className="social-media-icons absolute left-0 top-[30%] flex flex-col space-y-5 px-5 bg-white shadow-xl rounded-e-lg text-3xl py-5">
        {[
          <Link href="https://github.com/dipPal513">
            <BsGithub />{" "}
          </Link>,
          <Link href="https://github.com/dipPal513">
            <AiFillTwitterCircle />{" "}
          </Link>,
          <Link href="https://web.facebook.com/DipPal513/">
            <RiFacebookCircleFill />{" "}
          </Link>,
          <Link href="https://www.linkedin.com/in/dip-pal-107a8a203/">
            <GrLinkedin />{" "}
          </Link>,
        ].map((logo, index, array) => {
          return <li>{logo}</li>;
        })}
      </ul>
    </div>
  );
};

export default Banner;
