"use client";
import PageHeader from "@/Components/PageHeader";
import Weidgs from "@/Components/Weidgs";
import Image from "next/image";
import { skills_data } from "../../../../public/projectData";
import { useState } from "react";
import { motion } from "framer-motion";
const Skills = () => {
  const [data, setData] = useState(skills_data);
  const handleSkillsCategory = (category) => {
    const filteredData = skills_data.filter((el) => el.category == category);

    setData(filteredData);
    console.log(filteredData);
    console.log(category);
  };
  return (
    <div className="skills py-12">
      <Weidgs
        customClass={"leftWeidgs w-[40vw !important] h-[40vw !important]"}
        position={{
          bottom: "30%",
          left: "10%",
          borderRadius: "50%",
          background: " #00f260" /* fallback for old browsers */,
          background:
            " -webkit-linear-gradient(to right, #00f260, #0575e6)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #00f260, #0575e6)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
      />
      <div className="max-w-screen-lg mx-auto my-5">
        <PageHeader
          title={"My skiils"}
          description={
            "Beyond weapons, I excel in problem-solving, leadership, and adaptability, showcasing a versatile skill set."
          }
        />
        <ul className="flex items-center uppercase gap-x-3 mx-auto w-full justify-center mt-12 mb-12 flex-wrap">
          {["frontend", "backend", "tools", "learning"].map((el) => (
            <li
              key={el}
              onClick={() => handleSkillsCategory(el)}
              className="backdrop-blur-lg brightness-100 border cursor-pointer rounded-full px-4 py-2 hover:bg-[var(--main-color)] transition-all duration-200 mt-3 md:mt-0 hover:text-black"
            >
              {el}
            </li>
          ))}
        </ul>
        <div className="skills-hub flex mt-4 flex-wrap items-center justify-center gap-x-4 py-5">
          <ul className="flex items-center justify-center flex-wrap">
            {data?.map((el, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, delay: 0.4 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex-col items-center justify-center p-3"
                  key={el.name}
                >
                  <div className="logo text-[#00e3ff] text-6xl">{el.logo}</div>

                  <h3 className="logo_tolltip  uppercase mt-2">{el.name}</h3>
                </motion.div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
