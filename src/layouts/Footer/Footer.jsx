// IMPORT
import React from "react";

// STYLE
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <h2>Me contacter</h2>
        <div className= "container-footer-email button">
        <a href="mailto:anais.fayeulle.af@gmail.com">anais.fayeulle.af@gmail.com</a>
        </div>
        <div className="container-footer-text">
          Ce site a été réalisé à la main. 
          Vous pouvez trouver le code source
          sur <a href="https://github.com/anaissclt/Portfolio"> GitHub </a>.
           Merci de votre visite !
        </div>
      </div>
    </footer>
  );
}

export default Footer;
