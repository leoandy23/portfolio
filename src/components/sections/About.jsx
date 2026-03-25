import React from "react";
import "../../styles/About.css";
import fotoleo from "../../assets/images/foto-leoandy.jpeg";
import cvleo from "../../assets/files/CV_Andy_Otavalo.pdf";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../lib/icons/FontAwesome";
import SkillsIcons from "../pure/SkillsIcons";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container my-5">
        <div className="text-center">
          <h2 className="fw-bold section-title">About Me</h2>
        </div>
        <div className="row">
          <div className=" col-lg-6  col-sm-12 p-3">
            <div className="text-center text-lg-end w-100">
              <h3 className="fw-bold">Leonel Otavalo</h3>
              <small>
                <b>BACKEND ENGINEER & AI ENGINEER</b>
              </small>
              <p className="text-justify">
                Software Engineer specialized in Backend Engineering and Artificial Intelligence. 
                I design and implement scalable REST APIs using NestJS and Python (FastAPI/Flask), 
                develop AI-powered solutions using LangChain and LLMs (OpenAI, Bedrock), 
                and orchestrate data pipelines with tools like Apache Airflow.
              </p>
              <p className="text-justify">
                I have hands-on experience deploying solutions across multiple cloud providers 
                (Google Cloud Platform, Microsoft Azure, Amazon AWS) using Infrastructure as Code 
                with Terraform and Docker containerization. Strong technical depth, problem-solving 
                skills, and ability to translate complex requirements into robust, production-ready systems.
              </p>
              <div className="text-center text-lg-start mt-3">
                <a
                  href={cvleo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary shadow me-2">
                  View CV
                </a>
                <a href="#contact" className="btn btn-primary shadow">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className=" col-lg-6  col-sm-12 p-3">
            <div className="w-75 m-auto rounded-circle shadow-custom photo-user">
              <img
                src={fotoleo}
                alt="foto-leoandy"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="text-center">
            <h3 className="fw-bold section-subtitle">My skills</h3>
            <SkillsIcons></SkillsIcons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
