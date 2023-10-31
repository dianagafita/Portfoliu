import React, { useEffect } from "react";
import LinkList from "./LinkList";
import img from "./Image/img2.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Home.css";
import ScrollReveal from "scrollreveal";

const Home = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100, 200, 300], [1, 0.5, 0.5, 0]);
  const y = useTransform(scrollY, [0, 200], [0, 200]);

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
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "40px",
      duration: 3000,
      reset: true,
    });

    sr.reveal(".message", {
      delay: 1000,
      scale: 1.5,
      beforeReveal: () => {
        document.querySelector(".message").style.opacity = 1;
        document.querySelector(".message").style.transform = "scale(1)";
      },
    });

    sr.reveal(".home-links", {
      interval: 200,
      beforeReveal: (el) => {
        el.style.transition = "transform 0.5s ease, opacity 0.5s ease";

        el.style.transform = "scale(1.3)";
        el.style.opacity = 1;
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = "scale(1.5)";
        }, 300);
      },
    });
  }, []);

  return (
    <section id="home" className="home">
      <motion.div>
        <motion.img
          id="image"
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
        <div className="home-message" id="message">
          <h2>Hello,</h2>
          <h1> I'm Diana.</h1>
        </div>
        <LinkList />
      </motion.div>
    </section>
  );
};

export default Home;
