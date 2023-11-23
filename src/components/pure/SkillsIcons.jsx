import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconFlutter from "../../assets/images/icon-flutter.png";
const SkillsIcons = () => {
  return (
    <div className="d-flex shadow rounded-3 py-4 px-3 flex-wrap justify-content-evenly align-items-center">
      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "js-square"]}
          style={{ color: "#f0db4f", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">Java Script</small>
      </span>

      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "bootstrap"]}
          style={{ color: "#7952b3", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">Bootstrap</small>
      </span>

      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "react"]}
          style={{ color: "#00ddd0", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">React JS</small>
      </span>

      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "git-alt"]}
          style={{ color: "#f34f29", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">Git</small>
      </span>

      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "python"]}
          style={{ color: "#3776ab", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">Python</small>
      </span>

      <span className="d-flex flex-column align-items-center m-2">
        <img
          src={IconFlutter}
          alt="icon-flutter"
          style={{
            width: "2.5rem",
            height: "2.5rem",
          }}
        />
        <small className="fw-bold">Flutter</small>
      </span>

      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "laravel"]}
          style={{ color: "red", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">Laravel</small>
      </span>
    </div>
  );
};

export default SkillsIcons;
