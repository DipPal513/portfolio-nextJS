import PageHeader from "./PageHeader";

const AboutMe = () => {
  return (
    <div className="aboutme bg-gray-200 py-8">
      <div className="max-w-screen-lg mx-auto flex flex-col space-y-10">
        <PageHeader
          title="about me"
          description=" Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology"
        />
        <div className="grid grid-cols-2 gap-x-10">
          <div className="left-about">
            <h4 className="font-bold capitalize mb-3 text-xl">get know me</h4>
            <p className="text-gray-500 text-lg">
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section. I also
              like sharing content related to the stuff that I have learned over
              the years in Web Development so it can help other people of the
              Dev Community. Feel free to Connect or Follow me on my Linkedin
              where I post useful content related to Web Development and
              Programming I'm open to Job opportunities where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience then don't hesitate to contact me.
            </p>
            <button className="text-white mt-5 contact py-3 px-7 rounded-sm bg-cyan-600 uppercase">
              contact
            </button>
          </div>
          <div className="skills-sec">
            <ul className="flex flex-wrap space-y-3 space-x-2">
              {[
                "html",
                "css",
                "javascript",
                "react",
                "sass",
                "github",
                "responsive design",
                "tailwind",
                "bootstrap",
                "express basic",
              ].map((skill, index) => {
                return (
                  <li className="bg-gray-400 rounded-lg py-2 px-4 block text-white capitalize">
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
