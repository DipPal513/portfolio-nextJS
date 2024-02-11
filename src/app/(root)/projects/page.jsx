"use client";

import PageHeader from "@/Components/PageHeader";
import PrimaryButton from "@/Components/PrimaryButton";
import "../../styles/project.css";
import Link from "next/link";
import Image from "next/image";

import dynamic from "next/dynamic";
import { projectData } from "../../../../public/projectData";
const Project = dynamic(() => import("@/Components/Project"), {
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
const Projects = () => {
  return (
    <div className="projects mt-8">
      <PageHeader
        title="Projects"
        description={
          "the projects i built with my front end and backend skills"
        }
      />
      <div className="projects max-w-screen-lg mx-auto sm:flex gap-x-5 mt-12 px-3 lg:px-0 items-center justify-center">
        {projectData.slice(0, 3).map((data, index) => {
          return <Project data={data} index={index} key={index} />;
        })}
      </div>
      <div className="flex items-center justify-center mt-7">
        <PrimaryButton text="MOre" link={"/projects/allprojects"} />
      </div>
    </div>
  );
};

export default Projects;
