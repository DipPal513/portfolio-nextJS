import Link from "next/link";
import React from "react";
export default function Project({ data, index }) {
  return (
    <div className="nft my-4 md:my-0" key={index}>
      <div className="main">
        <div className="overflow-hidden relative">
          <img
            className="tokenImage w-full object-top object-contain"
            src={data.thumbnail}
            alt="project_bg"
            width={300}
            height={400}
          />
        </div>
        <h2 className="capitalize">{data.name}</h2>
        <p className="description">{data.description.slice(0, 100)}...</p>
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
}
