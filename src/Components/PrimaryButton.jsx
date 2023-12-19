import Link from "next/link";

const PrimaryButton = ({ text, link = "" ,customClass,target=""}) => {
  return (
    <button className={`btn ${customClass}`} style={{margin:0}}><Link href={link} target={target}>{text}</Link></button>
  );
};

export default PrimaryButton;
