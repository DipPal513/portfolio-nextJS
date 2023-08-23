import React from "react";
import { GiNightSleep } from "react-icons/gi";
import { BsFillCloudSunFill } from "react-icons/bs";
import { useState } from "react";
const DarkMode = () => {
  const [dark, setDark] = useState(false);
  function handleMode() {
    setDark(!dark);
  }
  return (
    <div className="absolute right-0 top-[30%] tranform z-[111111] bg-white p-4 shadow-md rounded-sm hover:bg-gray-400 hover:text-white duration-200">
      <button onClick={handleMode}>
        {dark? <GiNightSleep /> : <BsFillCloudSunFill />}
        
      </button>
      
    </div>
  );
};

export default DarkMode;
