import "./Header.css";
import {
  FaPhone,
  FaHome,
  FaListAlt,
  FaUserCircle,
  FaWindowRestore,
} from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
export default function ListOfContents() {
  const listVariants = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  const listContents = [
    {
      href: "#",
      text: "Home",
      icon: FaHome,
      iconStyle: { marginRight: "20px" },
    },
    {
      href: "#about",
      text: "About",
      icon: FaUserCircle,
      iconStyle: { marginRight: "20px" },
    },
    {
      href: "#skills",
      text: "Skills",
      icon: FaListAlt,
      iconStyle: { marginRight: "23px" },
    },
    {
      href: "#projects",
      text: "Projects",
      icon: FaWindowRestore,
      iconStyle: { marginRight: "5px" },
    },
    {
      href: "#contact",
      text: "Contact",
      icon: FaPhone,
      iconStyle: { marginRight: "7px" },
    },
  ];

  return (
    <div className="nav_menu" id="nav-menu">
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="nav_list"
        id="navlist"
      >
        {listContents.map((item, id) => (
          <motion.li key={id} className="nav_item" variants={itemVariants}>
            <motion.div
              onClick={() => {
                console.log("a");
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
            >
              <a href={item.href} className="nav_link active">
                {React.createElement(item.icon, { style: item.iconStyle })}
                {item.text}
              </a>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
