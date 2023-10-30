import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Home.css";

export default function LinkList() {
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
        damping: 20,
        stiffness: 200,
      },
    },
  };
  return (
    <div className="home-links">
      <motion.ul variants={listVariants} initial="hidden" animate="visible">
        <motion.li variants={itemVariants}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            href="https://www.linkedin.com/in/gafita-diana-b478ab239/"
          >
            <FaLinkedinIn />
          </motion.a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            href="https://github.com/dianagafita"
          >
            <FaGithub />
          </motion.a>
        </motion.li>
      </motion.ul>
    </div>
  );
}
