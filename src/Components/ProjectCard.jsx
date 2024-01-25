"use client";
import { motion } from "framer-motion";
import Link from "next/link";
function ProjectCard({ el }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 0.4 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="nft">
        <div className="main">
          {/* Adjust this part to display your product details */}
          <div className="overflow-hidden h-[150px]">
            <img
              src={el.thumbnail}
              // className="h-2/3 overflow-hidden"
              height={100}
              // loading={"lazy"}
              width={250}
              style={{
                objectFit: "contain",
                objectPosition: "top",
              }}
              alt="Product image"
            />
          </div>
          <h2 className="capitalize text-left">{el.name}</h2>
          <p className="description text-left">
            {el.description.slice(0, 100)}...
          </p>
          <div className="tokenInfo">
            <div className="price">
              <p className="text-[var(--main-color)] mb-3 w-full">
                {el.category}
              </p>
            </div>
          </div>
          <button className="w-2/4 py-2 project_details_button">
            <Link href={`/projects/${el.id}`}>
              See Details
            </Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
export default ProjectCard;
