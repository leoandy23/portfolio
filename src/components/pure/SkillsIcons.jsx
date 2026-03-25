import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconFlutter from "../../assets/images/icon-flutter.png";

const SkillsIcons = () => {
  return (
    <div className="d-flex shadow rounded-3 py-4 px-3 flex-wrap justify-content-evenly align-items-center">
      {/* Backend */}
      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "node-js"]}
          style={{ color: "#E0234E", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">NestJS</small>
      </span>

      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "python"]}
          style={{ color: "#3776ab", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">Python</small>
      </span>

      {/* AI/ML */}
      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fas", "brain"]}
          style={{ color: "#412991", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">OpenAI</small>
      </span>

      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fas", "link"]}
          style={{ color: "#007BFF", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">LangChain</small>
      </span>

      {/* Cloud */}
      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "google"]}
          style={{ color: "#4285F4", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">GCP</small>
      </span>

      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "microsoft"]}
          style={{ color: "#0078D4", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">Azure</small>
      </span>

      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "aws"]}
          style={{ color: "#FF9900", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">AWS</small>
      </span>

      {/* DevOps */}
      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "docker"]}
          style={{ color: "#2496ED", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">Docker</small>
      </span>

      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fas", "cube"]}
          style={{ color: "#7B42BC", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">Terraform</small>
      </span>

      {/* Databases */}
      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fas", "database"]}
          style={{ color: "#336791", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">PostgreSQL</small>
      </span>

      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fas", "wind"]}
          style={{ color: "#017CEE", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">Airflow</small>
      </span>

      {/* Frontend */}
      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "react"]}
          style={{ color: "#61dbfb", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">React</small>
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

      {/* Tools */}
      <span className="d-flex flex-column align-items-center m-2">
        <FontAwesomeIcon
          icon={["fab", "git-alt"]}
          style={{ color: "#f05032", fontSize: "2.5rem" }}
        />
        <small className="fw-bold">Git</small>
      </span>
    </div>
  );
};

export default SkillsIcons;
