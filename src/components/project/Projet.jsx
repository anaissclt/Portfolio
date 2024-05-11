import React from 'react';

// STYLE 
import './projet.css'

// DATAS 
import projectsData from '../../assets/datas/projets.json';

const Project = () => {
  return (
    <div className='div-projet'>
    <h1 className="project-title-h1">Mes projets</h1>
    <div className="projects-container">
      {projectsData.projets.map((project, index) => (
        <div key={index} className="project-item">
          <h3 className="project-title">{project.nom}</h3>
          <p className="project-description">{project.description}</p>
          <p className="project-competences">Compétences développées : {project.competences.join(', ')}</p>
          <a className="project-link" href={project.lien} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Project;