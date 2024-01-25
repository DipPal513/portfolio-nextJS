"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projectData } from "../../../../../public/projectData";
import "../../../styles/project.css";

import dynamic from "next/dynamic";
const ProjectCard = dynamic(() => import("@/Components/ProjectCard"), {
  loading: () => (
    <div className="border border-blue-200 shadow rounded-md p-4 w-[300px] mx-auto ">
      <div className="animate-pulse flex flex-col space-y-4">
        <div className=" bg-slate-700 h-32 w-full"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-4 w-1/3 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="h-6 w-1/3 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  ),
});

export const metadata = {
  title:"All projects of Dip Pal",
  desctiption:"this is all project page for Dip Pal portfolio"
}
const AllProjects = () => {
  const allCategories = [];
  const [selectedCategory, setSelectedCategory] = useState("all");
  projectData.map((el) => {
    allCategories.push(el.category);
  });

  const newAllCategory = [...new Set(allCategories)];
  const filtered =
    selectedCategory === "all"
      ? projectData
      : projectData.filter((el) => el.category === selectedCategory);
  return (
    <div className="all projects">
      <div className="max-w-screen-lg mx-auto py-5 text-center">
        <ul className="top_category flex item-center ms-auto capitalize gap-x-5 justify-center mb-20 flex-wrap">
          <li
            onClick={() => setSelectedCategory("all")}
            className={`mb-3 sm:mb-0 cursor-pointer category-item hover:bg-[var(--main-color)] hover:text-black duration-300 border px-5 py-2 rounded-full`}
          >
            All
          </li>
          {newAllCategory?.map((category, index) => (
            <li
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`mb-3 sm:mb-0 cursor-pointer category-item hover:bg-[var(--main-color)] rounded-full hover:text-black duration-300 border px-5 py-2 ${
                selectedCategory === category
                  ? "bg-[var(--main-color)] text-black"
                  : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
        <AnimatePresence>
          <div
            className="flex justify-center flex-wrap gap-3 sm:mx-0"
            key={selectedCategory}
          >
            {filtered?.map((el, index) => (
              <ProjectCard el={el} index={index} key={index} /> 
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AllProjects;
