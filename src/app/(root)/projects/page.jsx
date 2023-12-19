"use client";

import PageHeader from "@/Components/PageHeader";
import PrimaryButton from "@/Components/PrimaryButton";
import "../../styles/project.css";
import Link from "next/link";
const Projects = () => {
  return (
    <div className="projects mt-8">
      <PageHeader
        title="Projects"
        description={
          "the projects i built with my front end and backend skills"
        }
      />
      <div className="projects max-w-screen-lg mx-auto md:flex gap-x-5 mt-12 flex-wrap px-3 lg:px-0">
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
            category: "ManageMent",
            title: "make your marketing website",
            desc: "this is a ecommerce website built with react...",
          },
          {
            id: 3,
            img: "https://tony-react.vercel.app/static/img/blog-1.jpg",
            date: "02 mar 2023",
            category: "Portfolio",
            title: "make your marketing website",
            desc: "this is a ecommerce website built with react...",
          },
        ].map((data) => {
          const { img, date, category, title, desc, id } = data;
          return (
            <div class="nft my-4 md:my-0">
              <div class="main">
                <img
                  className="tokenImage object-contain"
                  src={img}
                  alt="project_bg"
                />
                <h2 className="capitalize">{title}</h2>
                <p class="description">{desc}</p>
                <div class="tokenInfo">
                  <div class="price">
                    <p className="text-[var(--main-color)]">{category}</p>
                  </div>
                  <div class="duration">
                    <ins>◷</ins>
                    <p>{date}</p>
                  </div>
                </div>
                {/* <hr /> */}
                {/* <div class="creator">
                  <div class="wrapper">
                    <img
                      src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                      alt="Creator"
                    />
                  </div>
                  <p>
                    <ins>Creation of</ins> Kiberbash
                  </p>
                </div> */}
                <button className="project_details_button"><Link href={`projects/${id}`}>See Details</Link></button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-7">
        <PrimaryButton text="MOre" link={"/projects/allProjects"} target="" />
      </div>
    </div>
  );
};

export default Projects;
