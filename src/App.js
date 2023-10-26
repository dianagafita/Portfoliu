import { AnimatePresence } from "framer-motion";
import About from "./components/About";
import BasicExample from "./components/Contact";
import Contact from "./components/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
export default App;
