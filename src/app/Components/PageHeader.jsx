import React from "react";

const PageHeader = ({title, description}) => {
  return (
    <div className="header text-center mx-auto ">
      <div className="page-header">
        <h3 className=" text-3xl uppercase font-bold tracking-widest">
          {title}
        </h3>
        <div className="bottom-line w-10 my-3 mx-auto h-2 rounded-lg bg-cyan-500"></div>
      </div>
      <p className="text-lg w-3/6 text-center mx-auto text-gray-500 mt-5">
       {description}
      </p>
    </div>
  );
};

export default PageHeader;
