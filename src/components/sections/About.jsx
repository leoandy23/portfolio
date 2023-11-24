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
                <b>STUDENT & PROGRAMMER</b>
              </small>
              <p className="text-justify">
                I am Leonel Otavalo, a 7th semester Software Engineering
                student, focused mainly on front-end development. With a year of
                experience in the full stack space, I have cultivated solid
                skills in creating captivating user experiences.
              </p>
              <p className="text-justify">
                I also have an intermediate level in back-end development,
                allowing me to approach projects holistically. My approach
                focuses on fusing visual aesthetics with functionality, creating
                efficient and attractive solutions.
              </p>
              <div className="text-center text-lg-start">
                <a
                  href={cvleo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary shadow">
                  View CV
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
