import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Home.css";

export default function LinkList(props) {
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
    <motion.div className="home-links">
      <motion.ul
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.5 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 200,
        }}
      >
        <motion.li
          whileHover={{ scale: 1.2, rotate: 20 }}
          whileTap={{ scale: 0.8 }}
        >
          <motion.a href="https://www.linkedin.com/in/gafita-diana-b478ab239/">
            <FaLinkedinIn />
          </motion.a>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.2, rotate: 20 }}
          whileTap={{ scale: 0.8 }}
        >
          <motion.a href="https://github.com/dianagafita">
            <FaGithub />
          </motion.a>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
