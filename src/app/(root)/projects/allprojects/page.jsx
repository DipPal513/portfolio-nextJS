"use client";
import React, { useState } from "react";
import "../../../styles/project.css";
import {projectData} from "../../../../../public/projectData";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { StyledComponentsConfig } from "next/dist/server/config-shared";
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
        <ul className="top_category flex item-center ms-auto capitalize gap-x-5 justify-center mb-20">
          <li
            onClick={() => setSelectedCategory("all")}
            className={`cursor-pointer category-item hover:bg-[var(--main-color)] hover:text-black duration-300 border px-5 py-2 `}
          >
            All
          </li>
          {newAllCategory.map((category) => (
            <li
              key={30000 + Math.random(10000000000) / 5}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer category-item hover:bg-[var(--main-color)] hover:text-black duration-300 border px-5 py-2 ${
                selectedCategory === category ? "bg-[var(--main-color)] text-black" : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
        <AnimatePresence>
          <div
            className="flex items-center justify-center flex-wrap gap-x-5"
            key={selectedCategory}
          >
            {filtered?.map((el) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 0.4 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-5"
                key={el.id}
              >
                <div className="nft my-4 md:my-0">
                  <div className="main">
                    {/* Adjust this part to display your product details */}
                    <img
                      src={el.thumbnail}
                      className="h-2/3 overflow-hidden"
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "contain",
                        objectPosition: "top",
                      }}
                      alt="Product image"
                    />
                    <h2 className="capitalize text-left">{el.name}</h2>
                    <p className="description text-left">
                      {el.description.slice(0, 100)}...
                    </p>
                    <div className="tokenInfo">
                      <div className="price">
                        <p className="text-[var(--main-color)] mb-3">
                          {el.category}
                        </p>
                      </div>
                      {/* <div className="duration">
                        <ins>◷</ins>
                        <p>no</p>
                      </div> */}
                    </div>
                    <button className="w-2/4 py-2 project_details_button">
                      <Link href={`/projects/${el.id}`}>See Details</Link>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AllProjects;
