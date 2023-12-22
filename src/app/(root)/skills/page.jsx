"use client"
import PageHeader from "@/Components/PageHeader";
import Weidgs from "@/Components/Weidgs";
import Image from "next/image";
import {skills_data} from "../../../../public/projectData"
const Skills = () => {
  return (
    <div className="">
      <Weidgs
        customClass={"leftWeidgs w-[40vw !important] h-[40vw !important]"}
        position={{

          bottom: "30%",
          left: "10%",
          borderRadius: "50%",
          background: " #00f260" /* fallback for old browsers */,
          background:
            " -webkit-linear-gradient(to right, #00f260, #0575e6)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #00f260, #0575e6)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
      />
      <div className="max-w-screen-lg mx-auto my-5">
        <PageHeader
          title={"My skiils"}
          description={"Beyond weapons, I excel in problem-solving, leadership, and adaptability, showcasing a versatile skill set."}
        />
        <div className="skills-hub flex mt-4 flex-wrap items-center justify-center gap-x-4 py-5">
          <ul className="flex items-center justify-center flex-wrap">
            {skills_data?.map((element,index) => {
              return (
                <div className="flex-col items-center justify-center p-3" key={index}>
                  <Image
                    src={element.logo}
                    className=""
                    width={100}
                    height={100}
                    style={{
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                  <h3 className="text-xl font-bold mx-auto">{element.name}</h3>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
