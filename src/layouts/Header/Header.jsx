// IMPORT
import React from "react";

// STYLE
import "./header.css";
import "../../assets/animations/animations.css"

function Header() {
  return (
    <header>
      <div className="container-header">
        <h1>Anais Fayeulle</h1>
        <nav className="nav">
				<ul>
					<li><a href="#about">À propos</a></li>
					<li><a href="#gallery">Projets</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
      </div>
    </header>
  );
}

export default Header;