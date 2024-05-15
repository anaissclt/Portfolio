import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./trainings.css";

const Trainings = () => {
  const [trainingsData, setTrainingsData] = useState([]);
  const [selectedTrainingIndex, setSelectedTrainingIndex] = useState(null);

  useEffect(() => {
    import("../../assets/datas/trainings.json").then((data) => {
      setTrainingsData(data.default);
    });
  }, []);

  const handleTrainingClick = (index) => {
    if (selectedTrainingIndex === index) {
      setSelectedTrainingIndex(null);
    } else {
      setSelectedTrainingIndex(index);
    }
  };

  return (
    <div className="div-trainings" id="formation">
      <h1 className="trainings-title-h1">Mes formations</h1>
      <div className="container-trainings">
        <div className="training-details">
          {trainingsData.map((training, index) => (
            <div key={index} className="training-item">
              <div
                className="training-title"
                onClick={() => handleTrainingClick(index)}
              >
                <h2>{training.titre}</h2>
                <FontAwesomeIcon
                  icon={
                    selectedTrainingIndex === index
                      ? faChevronUp
                      : faChevronDown
                  }
                />
              </div>
              {/* Affiche la description si la collapse est ouverte */}
              {selectedTrainingIndex === index && (
                <div  className="training-description">
                  <p>{training.description}</p>
                  {Array.isArray(training.details) && (
                    <ul>
                      {training.details.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainings;
