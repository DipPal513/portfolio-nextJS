import Link from "next/link";
import { motion } from "framer-motion";
const PrimaryButton = ({
  text,
  link = "",
  customClass,
  target = "",
  type = "button",
  isLinkNeeded = true,
  disabled = false,
}) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className={`btn ${customClass}`}
      style={{ margin: 0 }}
      type={type}
      disable={disabled}
    >
      {!isLinkNeeded ? (
        <span>{text}</span>
      ) : (
        <Link href={link} target={target}>
          {text}
        </Link>
      )}
    </motion.button>
  );
};

export default PrimaryButton;
