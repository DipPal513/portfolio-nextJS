import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { RiFacebookCircleFill } from "react-icons/ri";

export default () => {
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "About",
    },
    {
      href: "javascript:void()",
      name: "Blog",
    },
    {
      href: "javascript:void()",
      name: "",
    },
    {
      href: "javascript:void()",
      name: "Team",
    },
    {
      href: "javascript:void()",
      name: "Careers",
    },

    {
      href: "javascript:void()",
      name: "Suuport",
    },
  ];

  return (
    <footer className="mx-auto md:px-8 py-5 w-full flex flex-col items-center justify-center">
       <ul className="flex space-x-5 px-5 bg-transparent items-center mb-3 text-xl">
        {[
          <Link href="https://github.com/dipPal513">
            <BsGithub />{" "}
          </Link>,
          <Link href="https://github.com/dipPal513">
            <AiFillTwitterCircle />{" "}
          </Link>,
          <Link href="https://web.facebook.com/DipPal513/">
            <RiFacebookCircleFill />{" "}
          </Link>,
          <Link href="https://www.linkedin.com/in/dip-pal-107a8a203/">
            <GrLinkedin />{" "}
          </Link>,
        ].map((logo, index, array) => {
          return <li>{logo}</li>;
        })}
      </ul>
     <p> &copy; {new Date().getFullYear()} Dip Pal All rights reserved.</p>
    </footer>
  );
};
