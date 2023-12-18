import Link from "next/link";
import { motion } from "framer-motion";

const PrimaryButton = ({ text, link = "" }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link href={link} className="button-53" role="button">
        {text}
      </Link>
    </motion.div>
  );
};

export default PrimaryButton;
