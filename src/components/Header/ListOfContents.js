import { motion } from "framer-motion";

export default function ListOfContents(props) {
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
    <div>
      <div>
        <a href="#" />
      </div>
      <div>
        <motion.ul variants={listVariants} initial="hidden" animate="visible">
          <motion.li variants={itemVariants} onClick={props.hideNav}>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500 }}
              href="#home"
            >
              Home
            </motion.a>
          </motion.li>
          <motion.li variants={itemVariants} onClick={props.hideNav}>
            <motion.a
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
              href="#about"
            >
              About
            </motion.a>
          </motion.li>
          <motion.li variants={itemVariants} onClick={props.hideNav}>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500 }}
              href="#skills"
            >
              Skills
            </motion.a>
          </motion.li>
          <motion.li variants={itemVariants} onClick={props.hideNav}>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500 }}
              href="#projects"
            >
              Projects
            </motion.a>
          </motion.li>
          <motion.li variants={itemVariants} onClick={props.hideNav}>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500 }}
              href="#contact"
            >
              Contact
            </motion.a>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}
