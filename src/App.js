import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./App.css";
import { motion } from "framer-motion";
export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        {/* <Projects />
        <Contact />  */}
      </main>
    </div>
  );
}
