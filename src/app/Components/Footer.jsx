import Link from "next/link";

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
    <footer className="mx-auto md:px-8 py-5 w-full flex justify-center">
     <p> &copy; {new Date().getFullYear()} Dip Pal All rights reserved.</p>
    </footer>
  );
};
