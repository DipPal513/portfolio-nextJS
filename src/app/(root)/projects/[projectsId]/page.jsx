"use client";
import Link from "next/link";
import React from "react";

import { useParams } from "next/navigation";
import data from "../../../../../public/projectData";
import PrimaryButton from "@/Components/PrimaryButton";
const page = ({}) => {
  const { projectsId } = useParams();
  const singleProject = data.filter((el) => el.id == projectsId);

  return (
    <div className="">
      {singleProject.map((el) => (
        <div className="center max-w-screen-lg mx-auto py-10 px-3">
          <h1 className="md:text-4xl font-bold text-xl mb-4">{el.name}</h1>
          {/* <p className="text-gray-300 text-lg break-words mt-4 md:w-4/5 mb-5">
            {el.description}
          </p> */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 ">
            {el.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-4/5 h-[300px] object-contain"
                alt={`Image ${index}`}
              />
            ))}
          </div>
          <div className="project-details mt-5">
            <h1 className="md:text-3xl text-xl font-bold">
              PROJECT <span className="text-[var(--main-color)]">DETAILS</span>
            </h1>
            <p className=" mt-3 text-lg text-gray-300 mb-4">{el.description}</p>
            <div className=" mb-5">
              <h1 className="md:text-3xl text-xl font-bold">
                TECHNOLOGIES{" "}
                <span className="text-[var(--main-color)] mt-4">USED</span>
              </h1>
              <div className="">
                <ul className="ms-3 mt-4">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>Node Js</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-3">
              <PrimaryButton
                text={"Live Link"}
                link={el.liveLink}
                target={"_blank"}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
