import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../pure/TechStackCard.css";

const TechStackCard = ({ tech }) => {
  return (
    <div className="tech-card">
      <div className="tech-header">
        <div className="tech-icon-wrapper">
          <FontAwesomeIcon
            icon={[tech.icon.type, tech.icon.name]}
            style={{ color: tech.icon.color }}
            className="tech-icon"
          />
        </div>
        <div className="tech-info">
          <h5 className="tech-name">{tech.name}</h5>
          <span className="tech-proficiency">{tech.proficiency}%</span>
        </div>
      </div>
      <div className="proficiency-bar-container">
        <div
          className="proficiency-bar"
          style={{ width: `${tech.proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TechStackCard;
