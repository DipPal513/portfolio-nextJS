"use client";
import Link from "next/link";
import React from "react";
import { projectData } from "../../../../../public/projectData";
import PrimaryButton from "@/Components/PrimaryButton";
import { usePathname } from "next/navigation";
import Image from "next/image";
const ProjectDetails = () => {
  const pathname = usePathname();
  const projectsId = pathname.split("/").pop();
  const singleProject = projectData.filter((el) => el.id == projectsId);

  return (
    <div className="">
      {singleProject.map((el,index) => (
        <div className="center max-w-screen-lg mx-auto py-10 px-3" key={index}>
          <h1 className="md:text-4xl font-bold text-xl mb-4">{el.name}</h1>
          {/* <p className="text-gray-300 text-lg break-words mt-4 md:w-4/5 mb-5">
            {el.description}
          </p> */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 ">
            {el.images?.slice(0,1).map((img, index) => (
              <div className=" overflow-scroll bg-transparent overflow-x-hidden h-[50vh]"key={index}>
                <Image
                  width={400}
                  height={350}
                  // fill
                  src={img}
                  // loader ={() => <h2 className="text-xl text-white">Loading..</h2>}
                  className=""
                  alt={`Image ${index}`}
                />
              </div>
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
                <ul className="ms-5 mt-4 list-disc ">
                 {el.technologies.map( (tech,index) => <li className="text-xl" key={index}>{tech}</li>)
                  }
                </ul>
              </div>
            </div>
            <div className="flex gap-x-3">
              <PrimaryButton
                text={"Live Link"}
                link={el.liveLink}
                target={"_blank"}
              />
              <PrimaryButton
                text={"Code Link"}
                link={el.sourceCode}
                target={"_blank"}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
