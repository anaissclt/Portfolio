// IMPORT
import React from "react";

// COMPOSANTS
import About from "../../components/about/About";
import Project from "../../components/project/Projet";
import Skill from "../../components/skills/Skills"
import Trainings from "../../components/trainings/Trainings"


// STYLE
import "./home.css"

function Home() {
  return (
    <>
      <About/>
      <Project/>
      <Skill/>
      <Trainings/>
    </>
  );
}

export default Home;