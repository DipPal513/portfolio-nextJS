import React from "react";
import {motion} from 'framer-motion';
const PageHeader = ({ title, description }) => {
  return (
    <motion.div initial={{opacity:0,scale:.8}}whileInView={{opacity:1,scale:1}} transition={{duration:.7}} className="header  text-left md:text-center mx-auto ">
      <div className="page-header">
        <div className="text-3xl md:text-6xl flex items-center justify-center gap-x-6">
          <span className="font-bold text-5xl md:text-7xl" style={{color:"rgb(3 27 78)"}}>{"<"}</span>
          <h3 className="uppercase font-bold tracking-widest hover:tracking-wide duration-500">
            {title}
            <span className="font-bold text-5xl md:text-7xl"style={{color:"rgb(3 27 78)"}}>{"/>"}</span>
          </h3>
        </div>
        <div className="bottom-line w-10 my-3 mx-auto h-2 rounded-lg bg-[--main-color]"></div>
      </div>
      <p className="text-lg w-5/6 md:w-3/6 text-center mx-auto text-white mt-5">
        {description}
      </p>
    </motion.div>
  );
};

export default PageHeader;
