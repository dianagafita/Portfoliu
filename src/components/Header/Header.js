import { useState } from "react";
import "./Header.css";
import { AnimatePresence, motion } from "framer-motion";
import ListOfContents from "./ListOfContents";
import NavButton from "./NavButton";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const hideNav = () => {
    setIsNavExpanded(false);
  };
  const navHandler = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <header className="header">
      <nav className="navigation">
        <a href="/" className="brand-name"></a>

        <NavButton navHandler={navHandler} />

        {!isNavExpanded && (
          <div className="navigation-menu">
            <ListOfContents />
          </div>
        )}

        <AnimatePresence>
          {isNavExpanded && (
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              className="navigation-menu expanded"
            >
              <ListOfContents hideNav={hideNav} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
