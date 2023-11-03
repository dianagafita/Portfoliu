import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Home.css";
import React from "react";
export default function LinkList(props) {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
    },
  };

  const linkList = [
    {
      href: "https://www.linkedin.com/in/gafita-diana-b478ab239/",
      icon: FaLinkedinIn,
    },
    { href: "https://github.com/dianagafita", icon: FaGithub },
  ];

  return (
    <motion.div className="home-links">
      {linkList.map((link, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.2, rotate: 20 }}
          whileTap={{ scale: 0.8 }}
        >
          <motion.a href={link.href}>{React.createElement(link.icon)}</motion.a>
        </motion.li>
      ))}
    </motion.div>
  );
}
