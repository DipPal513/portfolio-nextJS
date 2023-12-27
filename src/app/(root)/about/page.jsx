"use client";
import PageHeader from "@/Components/PageHeader";
import PrimaryButton from "@/Components/PrimaryButton";
import Weidgs from "@/Components/Weidgs";
import { motion } from "framer-motion";
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp }from "react-icons/io5";
import Image from "next/image";
// import hover3d from "@/utils/hover";
const AboutMe = () => {
  return (
    <div className="aboutme py-8 relative mt-24">
      
      <Weidgs

        customClass={"rightWeidgs"}
        position={{
          right: "15%",
          top: "40%",
          background: "var(--main-color)",
          width: "200px",
          height: "200px",
        }}
      />

      <Weidgs
        customClass={"leftWeidgs"}
        position={{
          left: 30,
          top: 30,
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
              I&apos;m a full-stack web wizard with 2+ years of experience
              sculpting digital experiences. Passionate about pixel-perfect
              design and coding magic, I craft frontend wonders that elevate
              products. I&apos;m a proud member of the Dev Community, sharing
              insights and chasing the thrill of continual growth. Let&apos;s
              build something extraordinary together!
            </p>
            <div className="mb-3">
              <p className="flex items-center gap-x-2 text-lg">
              <MdLocationOn />
               <span>Dhaka,Bangladesh</span>
              </p>
              <p className="flex items-center gap-x-2 text-lg">
              <IoCallSharp />
               <span>+88 01625-197575</span>
              </p>
            </div>
            <PrimaryButton className="" text="Connect" />{" "}
          </div>
          <div className="px-5 md:px-0">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "tween", duration: 0.5 }}
              src="https://i.ibb.co/d67c1tF/Dippal-3.jpg"
              alt="Dippal-3"
               className="md:w-3/5"
              // width={400}
              // height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
