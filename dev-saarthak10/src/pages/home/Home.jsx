import React from "react";
import Header from "../../components/header/Header";
import Intro from "../introduction/Intro";
import About from "../about/About";
import Skills from "../skills/Skills";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

const Home = () => {
  const pages = [
    { id: 1, title: "About", color: "#000" },
    { id: 2, title: "Work", color: "#fff" },
    { id: 3, title: "Contact", color: "#fff" },
  ];
  return (
    <div class="w-full">
      <div>
        <Header pages={pages} />
      </div>
      <div>
        <Intro />
      </div>
      <div class="bg-gray-50">
        <About />
      </div>
      <div >
        <Skills />
      </div>
      <div class="bg-gray-50">
        <Experience />
      </div>
      <div >
        <Projects />
      </div>
      <div class="bg-gray-50">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
