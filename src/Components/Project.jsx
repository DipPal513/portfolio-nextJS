import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Project({ data, index }) {
  return (
    <div className="nft my-4 md:my-0" key={index}>
      <div className="main">
        <div className="overflow-hidden relative">
          <Image
            className="tokenImage w-full object-top object-contain"
            src={data.thumbnail}
            alt="project_bg"
            width={300}
            height={400}
            placeholder="blur"
            blurDataURL="image thumbnail"
          />
        </div>
        <h2 className="capitalize font-bold text-xl">{data.name}</h2>
        <p className="description line-clamp-3">{data.description}</p>
        <div className="tokenInfo">
          <div className="price">
            <p className="text-[var(--main-color)] mb-2">#{data.category}</p>
          </div>
        </div>

        <button className="w-2/4 py-2 project_details_button">
          <Link href={`/projects/${data.id}`}>see details</Link>
        </button>
      </div>
    </div>
  );
}
