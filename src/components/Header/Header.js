import React, { useEffect } from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { HiViewList } from "react-icons/hi";
import ListOfContents from "./ListOfContents";

export default function Header() {
  useEffect(() => {
    const handleToggleClick = () => {
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.toggle("show_menu");
    };

    const toggle = document.getElementById("nav-toggle");
    if (toggle) {
      toggle.addEventListener("click", handleToggleClick);
    }

    return () => {
      if (toggle) {
        toggle.removeEventListener("click", handleToggleClick);
      }
    };
  }, []);

  return (
    <header className="l-header" id="head">
      <nav className="nav bd-grid">
        <ListOfContents />
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="nav_toggle"
          id="nav-toggle"
        >
          <HiViewList />
        </motion.div>
      </nav>
    </header>
  );
}
