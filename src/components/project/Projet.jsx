import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// STYLE 
import './projet.css'

// DATAS 
import projectsData from '../../assets/datas/projets';

const Project = () => {

  return (
    <div className='div-projet'  id="projects">
    <h1 className="project-title-h1">Mes projets</h1>
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div key={index} className="project-item">
          <h3 className="project-title">{project.nom}</h3>
          <p className="project-description">{project.description}</p>
          <img width={200} src={project.url} alt={project.alt} /> 
          <div className='competences'>
              {project.competences.map((competence, i) => (
                <span key={i} className="project-competences">{competence}</span>
              ))}
            </div>
          <a className="project-link button" href={project.lien} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} />
          {" "}GitHub</a>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Project;