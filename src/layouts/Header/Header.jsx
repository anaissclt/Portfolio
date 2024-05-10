// IMPORT
import React from "react";

// STYLE
import "./header.css";

function Header() {
  return (
    <header>
      <div className="container-header">
        <h1>Anais Fayeulle</h1>
        <nav class="nav">
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