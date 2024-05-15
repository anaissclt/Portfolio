import React, { useEffect, useRef } from 'react';

// STYLE 
import './skills.css'

// DATAS 
import SkillsData from '../../assets/datas/skills';

const Skill = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const scrollSkills = () => {
      container.scrollLeft += 1; // Défilement d'un pixel à la fois

      // revenir au début si on a dépassé la largeur du contenu 
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    };

    // Intervalle pour le défilement automatique
    const scrollInterval = setInterval(scrollSkills, 5); // vitesse du défilement

    return () => clearInterval(scrollInterval);
  }, []);

  // Dupliquer les éléments de manière dynamique
  const duplicatedSkills = SkillsData.concat(SkillsData);
  
  return (
    <div className='div-skills' id="skills">
      <h1 className="skills-title-h1">Mes compétences</h1>
      <div className="skills-outer-container">
        <div className="skills-container" ref={containerRef}>
          {duplicatedSkills.map((skills, index) => (
            <div key={index + SkillsData.length} className="skills-item">
              <h2 className="skills-title">{skills.nom}</h2>
              <img width={100} height={100} src={skills.url} alt={skills.nom} className="skills-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;