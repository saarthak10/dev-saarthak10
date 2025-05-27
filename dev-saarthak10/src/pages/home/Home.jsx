import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import Intro from "../introduction/Intro";
import About from "../about/About";
import Skills from "../skills/Skills";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const pages = [
    { id: 1, title: "About", color: "#000", name:"about" },
    { id: 2, title: "Work", color: "#fff", name:"work" },
    { id: 3, title: "Contact", color: "#fff", name:"contact" },
  ];
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactsRef = useRef(null);



  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  return (
    <div class="w-full dark:bg-gray-950">
      <div>
        <Header
          pages={pages}
          handleThemeToggle={handleThemeToggle}
          theme={theme}
        />
      </div>
      <div>
        <Intro theme={theme} />
      </div>
      <div class="bg-gray-50 dark:bg-gray-dark-50 ">
        <About theme={theme} ref={aboutRef}/>
      </div>
      <div>
        <Skills ref={skillsRef}/>
      </div>
      <div class="bg-gray-50 dark:bg-gray-dark-50">
        <Experience ref={experienceRef} theme={theme}/>
      </div>
      <div>
        <Projects ref={projectsRef}/>
      </div>
      <div class="bg-gray-50 dark:bg-gray-dark-50">
        <Contact ref={contactsRef} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
