import React, { useEffect, useRef } from "react";
import "./About.css"; // Import the CSS for styling

export default function About() {
  const textRef = useRef(null);
  let interval;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateText();
          } else {
            clearText();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      clearInterval(interval);
    };
  }, []);

  const animateText = () => {
    const text = textRef.current.dataset.text;
    let i = 0;
    interval = setInterval(() => {
      textRef.current.textContent = text.slice(0, i);
      i++;
      if (i > text.length) {
        clearInterval(interval);
      }
    }, 30);
  };

  const clearText = () => {
    clearInterval(interval);
    textRef.current.textContent = "";
  };

  return (
    <div>
      <section id="about" className="about">
        <div className="title">
          <h2>ABOUT</h2>
          <p
            ref={textRef}
            className="aboutText"
            data-text=" As a recent Computer Science graduate, I am passionately driven to
            explore diverse work opportunities that allow me to improve my
            programming skills for a rewarding career in the tech industry. My
            journey into the field of frontend development began several years
            ago, but only in my final year of college I rediscovered my passion
            for crafting exceptional user experiences. Since then, I have been
            dedicated to enhancing my programming skills through a combination
            of rigorous courses and hands-on project creation."
          ></p>
        </div>
      </section>
    </div>
  );
}
