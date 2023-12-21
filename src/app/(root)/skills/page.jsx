import PageHeader from "@/Components/PageHeader";
import Weidgs from "@/Components/Weidgs";

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
          description={"with those i work with"}
        />
        <div className="skills-hub flex mt-4 flex-wrap items-center justify-center gap-x-4 py-5">
          <ul className="flex items-center justify-center flex-wrap">
            {[
              {
                name: "HTML 5",
                logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
              },
              {
                name: "CSS 3",
                logo: "https://imgs.search.brave.com/N1hgWKHudLbcpp0RBaetQ76JGZu8Djm_02jt8OagdHo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc.svg",
              },
              {
                name: "Javascript",
                logo: "https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png",
              },
              {
                name: "Tailwind",
                logo: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
              },
              {
                name: "jest",
                logo:"https://imgs.search.brave.com/qJgP9OO4WaQ19mavzFyXoLFpPl_V6Uohco0FDyafvXs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0ovamVzdC1s/b2dvLUY5OTAxRUJC/Rjctc2Vla2xvZ28u/Y29tLnBuZw"
              },
              {
                name: "Bootstrap",
                logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
              },
              {
                name: "React Js",
                logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png",
              },
              {
                name: "Next Js",
                logo: "https://logowik.com/content/uploads/images/nextjs7685.logowik.com.webp",
              },
              {
                name: "Node Js",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
              },
              {
                name: "Express Js",
                logo: "https://kinsta.com/wp-content/uploads/2022/04/express-1.png",
              },
              {
                name: "Mongo DB",
                logo: "https://www.vhv.rs/dpng/d/145-1450243_mongodb-logo-png-transparent-png.png",
              },
              {
                name: "Git",
                logo: "https://raw.githubusercontent.com/detain/svg-logos/master/svg/g/git-icon.svg",
              },
              {
                name: "GitHub",
                logo: "https://raw.githubusercontent.com/jaywcjlove/logo/master/img/github.svg",
              },
            ].map((element,index) => {
              return (
                <div className="flex-col items-center justify-center p-3" key={index}>
                  <img
                    src={element.logo}
                    className=""
                    style={{
                      width: "100px !important",
                      height: "100px",
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
