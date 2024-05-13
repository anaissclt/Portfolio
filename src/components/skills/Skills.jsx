import React from 'react';

// STYLE 
import './skills.css'

// DATAS 
import SkillsData from '../../assets/datas/skills.json';

const Skill = () => {
  return (
    <div className='div-skills'>
    <h1 className="skills-title-h1">Mes compétences</h1>
    <div className="skills-container">
      {SkillsData.projets.map((skills, index) => (
        <div key={index} className="skills-item">
          <h2 className="skills-title">{skills.nom}</h2>
          <img src={skills.logo} alt={skills.nom} className="skills-logo" />
        </div>
      ))}
    </div>
  </div>
  );
}

export default Skill;