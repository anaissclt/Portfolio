// IMPORT
import React from "react";

// COMPOSANTS
import About from "../../components/about/About";
import Project from "../../components/project/Projet";

// STYLE
import "./home.css"

function Home() {
  return (
    <>
      <About />
      <Project />
    </>
  );
}

export default Home;