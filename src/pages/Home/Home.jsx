// IMPORT
import React from "react";

// COMPOSANTS
import About from "../../components/about/About";
import Project from "../../components/project/Projet";
import Skill from "../../components/skills/Skills"

// STYLE
import "./home.css"

function Home() {
  return (
    <>
      <About />
      <Project />
      <Skill />
    </>
  );
}

export default Home;