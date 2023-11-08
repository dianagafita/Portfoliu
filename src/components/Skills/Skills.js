import React, { useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Skills.css";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa6";

const skillsList = [
  {
    id: "JS",
    text: "JavaScript",
    detailsText: `JavaScript - The Complete Guide 2023 (Beginner + Advanced) by Maximilian Schwarzmüller on Udemy.`,
    icon: DiJavascript1,
    style: { marginRight: "7px" },
  },
  {
    id: "React",
    text: "React",
    detailsText: `React - The Complete Guide 2023 (incl. React Router and Redux) by Maximilian Schwarzmüller on Udemy.`,
    icon: FaReact,
    style: { marginRight: "7px" },
  },
];

export default function Skills() {
  const handleToggleClick = (id) => {
    const showDetails = document.getElementById(`show${id}Details`);
    showDetails.classList.toggle("show_details");
  };
  useEffect(() => {
    skillsList.forEach((skill) => {
      const toggleSkill = document.getElementById(`${skill.id}_details-toggle`);
      if (toggleSkill) {
        toggleSkill.addEventListener("click", () =>
          handleToggleClick(skill.id)
        );
      }

      return () => {
        if (toggleSkill) {
          toggleSkill.removeEventListener("click", () =>
            handleToggleClick(skill.id)
          );
        }
      };
    });
  });

  return (
    <section className="skills" id="skills">
      <div className="title">
        <h2>SKILLS</h2>
      </div>

      {skillsList.map((skill, index) => (
        <div key={index}>
          <Container
            id="#js"
            maxW="300px"
            bg="#131a17"
            borderRadius={10}
            centerContent
            display="grid"
            gridTemplateColumns="1fr auto"
            alignItems="center"
            userSelect="none"
          >
            <h1 className="skillDisplay">
              {React.createElement(skill.icon, { style: skill.style })}
              {skill.text}
            </h1>
            <motion.div
              className="skill"
              id={`${skill.id}_details-toggle`}
              whileHover={{ scale: 1.3 }}
              whileTap={{
                scale: 1,
                transition: { type: "spring", stiffness: 500 },
              }}
              animate={{ rotate: 0 }}
            >
              <IoMdArrowDropdown id={`arrow-icon-${skill.id}`} />
            </motion.div>
          </Container>

          <div className="show_details" id={`show${skill.id}Details`}>
            <h1>{skill.detailsText}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}
