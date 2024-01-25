import React from "react";
import { motion } from "framer-motion";
export default function Skill({el}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 0.4 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-col items-center justify-center p-3"
      key={el.name}
    >
      <div className="logo text-[#00e3ff] text-6xl">{el.logo}</div>

      <h3 className="logo_tolltip  uppercase mt-2">{el.name}</h3>
    </motion.div>
  );
}
