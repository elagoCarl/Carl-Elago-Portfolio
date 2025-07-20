'use client';
import Navbar from "./components/navbar.jsx";
import Header from "./components/header.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import Experience from "./components/exp.jsx";
import DebugTextColors from "./components/DebugTextColors.jsx";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      {/* <DebugTextColors /> */}
    </>
  );
}
