import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconFlutter from "../../assets/images/icon-flutter.png";
import "../pure/TechStackCard.css";

const TechStackCard = ({ tech }) => {
  return (
    <div className="tech-card" title={tech.key}>
      <div className="tech-header">
        <div className="tech-icon-wrapper">
          {tech.key === "FLUTTER" ? (
            <img
              src={iconFlutter}
              alt="Flutter"
              className="tech-icon"
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={tech.icon}
              className="tech-icon"
            />
          )}
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
