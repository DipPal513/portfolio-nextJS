"use client";
import Link from "next/link";
import PageHeader from "../Components/PageHeader";
import PrimaryButton from "../Components/PrimaryButton";
import "../styles/project.css"
const Projects = () => {
  return (
    <div className="projects mt-8">
      <PageHeader
        title="Projects"
        description={
          "the projects i built with my front end and backend skills"
        }
      />
      <div className="projects md:flex max-w-screen-lg md:space-x-4 mt-8 mx-auto">
        {[
          {
            id: 1,
            img: "https://tony-react.vercel.app/static/img/blog-1.jpg",
            date: "02 mar 2023",
            category: "Ecommerce",
            title: "make your marketing website",
            desc: "this is a ecommerce website built with react...",
          },
          {
            id: 2,
            img: "https://tony-react.vercel.app/static/img/blog-1.jpg",
            date: "02 mar 2023",
            category: "Ecommerce",
            title: "make your marketing website",
            desc: "this is a ecommerce website built with react...",
          },
          {
            id: 3,
            img: "https://tony-react.vercel.app/static/img/blog-1.jpg",
            date: "02 mar 2023",
            category: "Ecommerce",
            title: "make your marketing website",
            desc: "this is a ecommerce website built with react...",
          },
        ].map((data) => {
          const { img, date, category, title, desc, id } = data;
          return (
            <div className="card relative mb-4 md:mb-0">
              <div className="img -z-1 relative">
                <img src={img} alt="" className="-z-40 relative" />
              </div>
              <div className="mx-3 p-4 card-info">
                <div className=" -mt-5">
                  <p className="date bg-[var(--main-color)] px-2 py-1">{date}</p>
                </div>

                <div className="bg-transparent ">
                  <div className="border-1 border-gray-300 rounded py-1 px-2 bg-gray-200 ">
                    {category}
                  </div>
                  <h3 className="capitalize font-semibold text-lg my-2">
                    {title}
                  </h3>
                  <p className="text-gray-500">{desc}</p>
                  <button className="uppercase mt-4 underline">
                    <Link href={`/projects/${id}`}>read more</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-7">
        <PrimaryButton text="MOre" link={"/projects/allProjects"} />
      </div>
    </div>
  );
};

export default Projects;
