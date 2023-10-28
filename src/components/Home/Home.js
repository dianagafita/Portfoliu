import img from "./Image/img2.jpeg";
import "./Home.css";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import LinkList from "./LinkList";

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100, 200, 300], [1, 0.5, 0.5, 0]);
  const y = useTransform(scrollY, [0, 200], [0, -100]);

  const imgVariants = {
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
    <AnimatePresence>
      <section id="#home" className="home">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
          variants={imgVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity: opacity, y: y }}
          className="img"
          src={img}
          alt="image"
        />
        <h2 className="home-message">Hello,</h2>
        <LinkList />
      </section>
    </AnimatePresence>
  );
}
