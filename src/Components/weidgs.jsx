import React from "react";

const Weidgs = ({ customClass, position, svg = "" }) => {
  return (
    <span className={` ease-in ${customClass}`} style={position}>
      {svg ? svg : ""}
    </span>
  );
};

export default Weidgs;
