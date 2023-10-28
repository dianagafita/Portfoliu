import "./Header.css";
import { useState } from "react";
import { motion } from "framer-motion";
import ListOfContents from "./ListOfContents";
import ListOfContentsIcons from "./ListOfContentsIcons";
import NavButton from "./NavButton";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const hideNav = () => {
    setIsNavExpanded(false);
  };
  // const navHandler = () => {
  //   //setIsNavExpanded(!isNavExpanded);
  //   setIsNavExpanded(!isNavExpanded);
  //   console.log("a");
  // };

  const navHandler = () => {
    setIsNavExpanded((prevState) => !prevState);
  };

  return (
    <header className="header">
      <nav className="navigation">
        <a href="/" className="brand-name" />

        <NavButton navHandler={navHandler} />

        {!isNavExpanded && (
          <div className="navigation-menu">
            <ListOfContents />
          </div>
        )}

        {isNavExpanded && (
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            className="navigation-menu expanded"
          >
            <ListOfContentsIcons hideNav={hideNav} />
          </motion.div>
        )}
      </nav>
    </header>
  );
}
