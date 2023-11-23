import React from "react";
import fotoleo from "../../assets/images/foto-leoandy.jpeg";
import cvleo from "../../assets/files/CV_Andy_Otavalo.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../lib/icons/FontAwesome";
import IconFlutter from "../../assets/images/icon-flutter.png";
const About = () => {
  return (
    <div className="section" id="about">
      <div className="container my-5">
        <div className="text-center">
          <h2 className="fw-bold section-title">About Me</h2>
        </div>
        <div class="row">
          <div class=" col-lg-6  col-sm-12 p-3">
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
              <a
                href={cvleo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary">
                View CV
              </a>
            </div>
          </div>
          <div class=" col-lg-6  col-sm-12 p-3">
            <div class="w-75 m-auto">
              <img
                src={fotoleo}
                alt="foto-leoandy"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
        <div class="my-3">
          <div className="text-center">
            <h3 className="fw-bold section-subtitle">My skills</h3>
          </div>
          <div className="d-flex shadow rounded-3 py-4 px-3 flex-wrap justify-content-between">
            <span className="d-flex flex-column align-items-center">
              <FontAwesomeIcon
                icon={["fab", "js-square"]}
                style={{ color: "#f0db4f", fontSize: "2.5rem" }}
              />
              <small>Java Script</small>
            </span>

            <span className="d-flex flex-column align-items-center">
              <FontAwesomeIcon
                icon={["fab", "bootstrap"]}
                style={{ color: "#7952b3", fontSize: "2.5rem" }}
              />
              <small>Bootstrap</small>
            </span>

            <span className="d-flex flex-column align-items-center">
              <FontAwesomeIcon
                icon={["fab", "react"]}
                style={{ color: "#00ddd0", fontSize: "2.5rem" }}
              />
              <small>React JS</small>
            </span>

            <span className="d-flex flex-column align-items-center">
              <FontAwesomeIcon
                icon={["fab", "git-alt"]}
                style={{ color: "#f34f29", fontSize: "2.5rem" }}
              />
              <small>Git</small>
            </span>

            <span className="d-flex flex-column align-items-center">
              <FontAwesomeIcon
                icon={["fab", "python"]}
                style={{ color: "#3776ab", fontSize: "2.5rem" }}
              />
              <small>Python</small>
            </span>

            <span className="d-flex flex-column align-items-center">
              <img
                src={IconFlutter}
                alt="icon-flutter"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                }}
              />
              <small>Flutter</small>
            </span>

            <span className="d-flex flex-column align-items-center">
              <FontAwesomeIcon
                icon={["fab", "laravel"]}
                style={{ color: "red", fontSize: "2.5rem" }}
              />
              <small>Laravel</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
