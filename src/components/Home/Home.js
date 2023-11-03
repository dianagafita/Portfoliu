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

  return (
    <section id="home" className="home">
      <div className="home-message" id="message">
        <h2>Hello,</h2>
        <h1> I'm Diana.</h1>
      </div>
      <LinkList />
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
    </section>
  );
};

export default Home;
