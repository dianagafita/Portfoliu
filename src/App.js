import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./App.css";
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "40px",
      duration: 3000,
      reset: true,
    });

    sr.reveal(".message", {
      delay: 200,
      scale: 1.5,
      beforeReveal: () => {
        document.querySelector(".message").style.opacity = 1;
        document.querySelector(".message").style.transform = "scale(1)";
      },
    });

    sr.reveal(".home-links", {
      interval: 400,
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

    sr.reveal(".skills", { interval: 200 });
    sr.reveal(".react", { delay: 600 });
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
