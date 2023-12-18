import React from "react";

const PageHeader = ({ title, description }) => {
  return (
    <div className="header text-center mx-auto ">
      <div className="page-header">
        <div className=" text-6xl flex items-center justify-center gap-x-6">
          <span className="font-bold text-7xl" style={{color:"rgb(3 27 78)"}}>{"<"}</span>
          <h3 className="uppercase font-bold tracking-widest">
            {title}
            <span className="font-bold text-7xl"style={{color:"rgb(3 27 78)"}}>{"/>"}</span>
          </h3>
        </div>
        <div className="bottom-line w-10 my-3 mx-auto h-2 rounded-lg bg-[--main-color]"></div>
      </div>
      <p className="text-lg w-3/6 text-center mx-auto text-white mt-5">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
