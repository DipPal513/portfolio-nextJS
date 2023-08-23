"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header  shadow-lg dark:bg-gray-700">
      <div className="main-header mx-auto max-w-screen-xl py-7 flex items-center justify-between">
        <h4 className="logo">{"<Dip Pal />"}</h4>
        <ul className="flex items-center space-x-4">
          {["Home", "About", "Projects", "Blogs", "Contact"].map(
            (el, index, arr) => {
              return (
                <li key={index} className="uppercase">
                  <Link href={"/"}>{el}</Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
