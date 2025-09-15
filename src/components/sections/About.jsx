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
                <b>SOFTWARE ENGINEER & FULL STACK DEVELOPER</b>
              </small>
              <p className="text-justify">
                Software Engineer with experience in full stack development,
                artificial intelligence, and backend process automation. I have
                worked with technologies such as Python, NestJS, React, and
                Flutter, as well as modern tools for building APIs and
                distributed systems.
              </p>
              <p className="text-justify">
                I have hands-on experience implementing cloud solutions using
                Google Cloud, Azure, and AWS, in addition to creating
                reproducible infrastructure through Terraform. I am
                characterized as proactive, self-taught, and team-oriented, with
                a strong motivation to tackle technical challenges that generate
                real impact in society.
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
