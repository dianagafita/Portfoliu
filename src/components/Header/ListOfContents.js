import "./Header.css";
import {
  FaPhone,
  FaHome,
  FaListAlt,
  FaUserCircle,
  FaWindowRestore,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
  return (
    <div className="nav_menu" id="nav-menu">
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="nav_list"
        id="navlist"
      >
        <motion.li className="nav_item" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <a href="#home" className="nav_link active">
              <FaHome style={{ marginRight: "20px" }} />
              Home
            </a>
          </motion.div>
        </motion.li>
        <motion.li className="nav_item" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <a href="#about" className="nav_link">
              <FaUserCircle style={{ marginRight: "20px" }} />
              About
            </a>{" "}
          </motion.div>
        </motion.li>
        <motion.li className="nav_item" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <a href="#skills" className="nav_link">
              <FaListAlt style={{ marginRight: "23px" }} />
              Skills
            </a>{" "}
          </motion.div>
        </motion.li>
        <motion.li className="nav_item" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <a href="#work" className="nav_link">
              <FaWindowRestore style={{ marginRight: "5px" }} />
              Projects
            </a>{" "}
          </motion.div>
        </motion.li>
        <motion.li className="nav_item" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <a href="#contact" className="nav_link">
              <FaPhone style={{ marginRight: "7px" }} />
              Contact
            </a>{" "}
          </motion.div>
        </motion.li>
      </motion.ul>
    </div>

    // return (
    //   <div className="nav_menu" id="nav-menu">
    //     <motion.ul
    //       variants={listVariants}
    //       initial="hidden"
    //       animate="visible"
    //       className="nav_list"
    //       id="navlist"
    //     >
    //       <motion.li className="nav_item" variants={itemVariants}>
    //         <a
    //           href="#home"
    //           whileHover={{ scale: 1.2 }}
    //           transition={{ type: "spring", stiffness: 500 }}
    //           className="nav_link active"
    //         >
    //           Home
    //         </a>
    //       </motion.li>
    //       <motion.li className="nav_item">
    //         <a href="#about" className="nav_link">
    //           About
    //         </a>
    //       </motion.li>
    //       <motion.li className="nav_item">
    //         <a href="#skills" className="nav_link">
    //           Skills
    //         </a>
    //       </motion.li>
    //       <motion.li className="nav_item">
    //         <a href="#work" className="nav_link">
    //           Projects
    //         </a>
    //       </motion.li>
    //       <motion.li className="nav_item">
    //         <a href="#contact" className="nav_link">
    //           Contact
    //         </a>
    //       </motion.li>
    //     </motion.ul>
    //   </div>
  );
}
