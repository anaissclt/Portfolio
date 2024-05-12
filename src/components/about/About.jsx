// STYLE
import "./about.css";
import "../../assets/style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="container-about">
      <h1 className="about-title">A propos de moi</h1>
      <p className="about-job-description">
      Bonjour et bienvenue sur mon portfolio !
      </p>
      <p className="about-content">
      Je suis une développeuse web de 23 ans, tout juste sortie de ma formation et avide d'explorer les vastes horizons du développement. 
      Explorez mes projets et découvrez mon univers sur GitHub ci-dessous !
      </p>
      <p className="about-button-section">
        <a href="https://github.com/anaissclt" className="button">
          <FontAwesomeIcon icon={faGithub} />
          {" "}GitHub
        </a>
      </p>
    </div>
  );
}

export default About;
