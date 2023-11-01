import React, { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Skills.css";

export default function Skills() {
  useEffect(() => {
    const handleToggleClick = (id) => {
      const showDetails = document.getElementById(`show${id}Details`);
      showDetails.classList.toggle("show_details");
    };

    const toggleJS = document.getElementById("JS_details-toggle");
    if (toggleJS) {
      toggleJS.addEventListener("click", () => handleToggleClick("JS"));
    }

    const toggleReact = document.getElementById("react_details-toggle");
    if (toggleReact) {
      toggleReact.addEventListener("click", () => handleToggleClick("React"));
    }

    return () => {
      if (toggleJS) {
        toggleJS.removeEventListener("click", () => handleToggleClick("JS"));
      }

      if (toggleReact) {
        toggleReact.removeEventListener("click", () =>
          handleToggleClick("React")
        );
      }
    };
  }, []);

  return (
    <section className="skills" id="#skills">
      <div className="title">
        <h2>SKILLS</h2>
      </div>

      <Container
        id="#js"
        maxW="250px"
        bg="#131a17"
        borderRadius={10}
        padding={5}
        marginBottom={30}
        marginLeft={50}
        centerContent
        display="grid"
        gridTemplateColumns="1fr auto"
        alignItems="center"
        userSelect="none"
      >
        <h1 style={{ marginLeft: 60 }}>JavaScript</h1>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 1,
            transition: { type: "spring", stiffness: 500 },
          }}
          transition={{ type: "spring", stiffness: 500 }}
          animate={{ rotate: 0 }}
          onClick={() => {
            const arrowIcon = document.getElementById("arrow-icon-JS");
            if (arrowIcon) {
              arrowIcon.style.transform =
                arrowIcon.style.transform === "rotate(180deg)"
                  ? "rotate(0deg)"
                  : "rotate(180deg)";
            }
          }}
          className="skill"
          id="JS_details-toggle"
        >
          <IoMdArrowDropdown id="arrow-icon-JS" />
        </motion.div>
      </Container>
      <div className="show_details" id="showJSDetails">
        <h1
          style={{
            marginLeft: 50,
            marginRight: "20cm",
          }}
        >
          JavaScript - The Complete Guide 2023 (Beginner + Advanced) by
          Maximilian Schwarzmüller on Udemy.
        </h1>
      </div>
      <Container
        id="react"
        maxW="250px"
        bg="#131a17"
        borderRadius={10}
        padding={5}
        marginBottom={30}
        marginLeft={50}
        centerContent
        display="grid"
        gridTemplateColumns="1fr auto"
        alignItems="center"
        userSelect="none"
      >
        <h1 style={{ marginLeft: 80 }}>React</h1>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 1,
            transition: { type: "spring", stiffness: 500 },
          }}
          transition={{ type: "spring", stiffness: 500 }}
          animate={{ rotate: 0 }}
          onClick={() => {
            const arrowIcon = document.getElementById("arrow-icon-React");
            if (arrowIcon) {
              arrowIcon.style.transform =
                arrowIcon.style.transform === "rotate(180deg)"
                  ? "rotate(0deg)"
                  : "rotate(180deg)";
            }
          }}
          className="skill"
          id="react_details-toggle"
        >
          <IoMdArrowDropdown id="arrow-icon-React" />
        </motion.div>
      </Container>
      <div className="show_details" id="showReactDetails">
        <h1 style={{ marginLeft: 50, marginRight: "20cm" }}>
          React - The Complete Guide 2023 (incl. React Router and Redux) by
          Maximilian Schwarzmüller on Udemy.
        </h1>
      </div>
    </section>
  );
}
