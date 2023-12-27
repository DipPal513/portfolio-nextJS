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
      <div className="projects max-w-screen-lg mx-auto sm:flex gap-x-5 mt-12 px-3 lg:px-0 items-center justify-center">
        {[
     {
      id: 5,
      name: "Shopspy - E-commerce Website",
      description:
        "ShopSpy stands tall as a cutting-edge e-commerce haven, meticulously crafted with React.js and Tailwind CSS. Its visually stunning and fully responsive design seamlessly adapts to various devices, ensuring an immersive shopping experience. Within its framework, the React Context API and an array of hooks orchestrate efficient state management, while styled components elevate the site's aesthetics and maintainability.As the digital storefront continues to evolve, the focus has shifted to its backend development, promising an even more comprehensive and robust platform in the making. Behind the scenes, a dedicated effort is underway to fortify ShopSpy's foundation, shaping it into a feature-rich and scalable ecosystem that harmonizes user interaction, functionality, and data management.Moreover, ShopSpy's commitment to cross-browser compatibility ensures uniformity and accessibility across different browsers, further enhancing its user-centric approach.The ongoing backend development signifies ShopSpy's relentless pursuit of excellence, poised to unveil a complete and seamless e-commerce experience that seamlessly integrates the frontend finesse with a robust backend infrastructure.",
      images: ["https://i.ibb.co/k33nnsD/shopspy-ecommerce-app-reactjs-netlify-app.png",
  
        'https://i.ibb.co/LCK4L1g/shopspy-ecommerce-app-reactjs-netlify-app-2.png'],
      thumbnail: "https://i.ibb.co/k33nnsD/shopspy-ecommerce-app-reactjs-netlify-app.png", // Add the URL for the thumbnail image
      sourceCode: "https://github.com/DipPal513/shopspy-ecommerce",
      liveLink: "https://shopspy-ecommerce-app-reactjs.netlify.app/",
      category: "ecommerce",
      challenges: "Search functionality, ",technologies:["react",'firebase',"tailwind","dynamic routing","private route",'context api','express js',"mongo db",'node js']
    },
    {
      id: 7,
      name: "Evento - Service-Based Website",
      description:
        "Evento is a service-based website specifically focused on event management services. It includes detailed service listings and contact information.",
      images: ['https://i.ibb.co/r24LWbr/quirky-benz-0101b5-netlify-app-1.png',
        'https://i.ibb.co/s9v5ktM/quirky-benz-0101b5-netlify-app-2.png',
        'https://i.ibb.co/FhZbTY0/quirky-benz-0101b5-netlify-app-3.png'],
      thumbnail: "https://i.ibb.co/WzzW3Bp/quirky-benz-0101b5-netlify-app.png", // Add the URL for the thumbnail image
      sourceCode: "https://github.com/DipPal513/evento-website",
      liveLink: "https://evento-service-based.netlify.app/",
      category: "service-based",
      challenges: "Event service presentation, Contact integration"
    },
    {
      id: 1,
      name: "Get Shape",
      description:
        "Get Shape is a health care-related website built using the MERN Stack. It enables users to explore and purchase products after registration. Users can view orders and utilize an admin panel for product management. Challenges included integrating secure user authentication and implementing a responsive user interface.",
      images: [
        "https://i.ibb.co/rbxgBz1/gym-1.png",
        "https://i.ibb.co/hfCx415/gym-2.png",
        "https://i.ibb.co/HF28vkM/gym-3.png",
        "https://i.ibb.co/P9wrN1H/gym-4.png"
      ],
      thumbnail: "https://i.ibb.co/wN4HXxD/simple-gym-website-firebaseapp-com-home.png",
      sourceCode: "https://github.com/DipPal513/gym-website",
      liveLink: "https://simple-gym-website.firebaseapp.com/",
      category: "ecommerce",
      challenges: "User authentication integration, Responsive UI implementation"
    },
        ].map((data,index) => {

          return (
            <div className="nft my-4 md:my-0" key={index}>
              <div className="main">
               <div>
               <img
                  className="tokenImage w-full object-top object-contain"
                  src={data.thumbnail}
                  alt="project_bg"
                />
               </div>
                <h2 className="capitalize">{data.name}</h2>
                <p className="description">{data.description.slice(0,100)}...</p>
                <div className="tokenInfo">
                  <div className="price">
                    <p className="text-[var(--main-color)]">{data.category}</p>
                  </div>
                  <div className="duration">
                    {/* <ins>◷</ins>
                    <p>{date}</p> */}
                  </div>
                </div>
                {/* <hr /> */}
                {/* <div className="creator">
                  <div className="wrapper">
                    <img
                      src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                      alt="Creator"
                    />
                  </div>
                  <p>
                    <ins>Creation of</ins> Kiberbash
                  </p>
                </div> */}
                <button className="w-2/4 py-2 project_details_button">
                  <Link href={`/projects/${data.id}`}>see details</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-7">
        <PrimaryButton text="MOre" link={"/projects/allprojects"} />
      </div>
    </div>
  );
};

export default Projects;
