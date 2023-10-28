import Icon from "./Icon";
import { motion } from "framer-motion";

export default function NavButton(props) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 500 }}
      className="hamburger"
      onClick={props.navHandler}
    >
      <Icon />
    </motion.button>
  );
}
