import React, { useState } from "react";
import "../../styles/Works.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iconFlutter from "../../assets/images/icon-flutter.png";

const images = require.context("../../assets/images/", true);

const WorkCard = ({ work, index }) => {
  const [imageLoading, setImageLoading] = useState(true);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const getCloudIcon = () => {
    if (!work.cloud) return null;
    
    const cloudName = work.cloud.name;
    if (cloudName === "google") return "Google Cloud";
    if (cloudName === "microsoft") return "Azure";
    if (cloudName === "aws") return "AWS";
    return null;
  };

  return (
    <div className="my-4">
      <div className="work-card shadow-lg p-3 rounded-4">
        <div
          className={`row align-items-center ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          }`}>
          <div className="col-12 col-md-6 p-3 p-md-4">
            {work.image && work.image.length > 0 ? (
              <div className="position-relative">
                {imageLoading && (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "300px" }}>
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
                <Slider {...sliderSettings} className="my-3">
                  {work.image.map((image, index) => (
                    <div
                      key={index}
                      className="d-flex justify-content-center p-1">
                      <div className="bg-white rounded-3 elevation">
                        <img
                          src={images(`./${image}`)}
                          alt={`${work.title} - Screenshot ${index + 1}`}
                          className="img-fluid rounded-3"
                          style={{
                            maxHeight: "300px",
                            display: imageLoading ? "none" : "block",
                          }}
                          onLoad={() => setImageLoading(false)}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div
                className="d-flex justify-content-center align-items-center rounded-4 bg-light"
                style={{
                  height: "300px",
                  background:
                    "linear-gradient(135deg, #e8f0ff 0%, #f5f7ff 100%)",
                  border: "2px dashed #0066cc",
                }}>
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={["fas", "code"]}
                    style={{ fontSize: "3rem", color: "#0066cc", opacity: 0.5 }}
                  />
                  <p className="text-secondary mt-3 fw-bold">Backend Project</p>
                </div>
              </div>
            )}
          </div>

          <div className="col-12 col-md-6">
            <div className="text-center mt-2 mb-3">
              <h5 className="fw-bold text-primary">{work.title}</h5>
              
              {/* Role and Architecture Tags */}
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-2">
                {work.role && (
                  <span className="badge bg-info text-dark">
                    <FontAwesomeIcon icon={["fas", "user-tie"]} className="me-1" />
                    {work.role}
                  </span>
                )}
                {work.architecture && (
                  <span className="badge bg-warning text-dark">
                    <FontAwesomeIcon icon={["fas", "cube"]} className="me-1" />
                    {work.architecture}
                  </span>
                )}
              </div>
            </div>

            <p className="fs-6 text-justify my-3">{work.description}</p>

            {/* Cloud Provider Badge */}
            {work.cloud && (
              <div className="text-center mb-2">
                <span
                  className="badge me-2"
                  style={{
                    backgroundColor: work.cloud.color,
                    color: "white",
                  }}>
                  <FontAwesomeIcon
                    icon={[work.cloud.type, work.cloud.name]}
                    className="me-1"
                  />
                  {getCloudIcon()}
                </span>
              </div>
            )}

            {/* Key Achievements */}
            {work.keyAchievements && work.keyAchievements.length > 0 && (
              <div className="mb-3">
                <h6 className="fw-bold text-secondary mb-2">Key Achievements</h6>
                <ul className="list-unstyled small">
                  {work.keyAchievements.map((achievement, idx) => (
                    <li key={idx} className="text-justify mb-1">
                      <FontAwesomeIcon
                        icon={["fas", "check-circle"]}
                        className="text-success me-2"
                        style={{ fontSize: "0.8rem" }}
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="text-center mb-3">
              <h6 className="fw-bold text-secondary mb-3">Technologies Used</h6>
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
                {work.technologies.map((tech, index) =>
                  tech.name !== "flutter" ? (
                    <div key={index} className="tech-icon" title={tech.name}>
                      <FontAwesomeIcon
                        icon={[tech.type, tech.name]}
                        style={{
                          color: tech.color,
                          fontSize: "2.2rem",
                        }}
                      />
                    </div>
                  ) : (
                    <div key={index} className="tech-icon" title="Flutter">
                      <img
                        src={iconFlutter}
                        alt="Flutter"
                        style={{
                          width: "2.2rem",
                          height: "2.2rem",
                        }}
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="text-center mt-3">
              {work.url && work.url !== "#" ? (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-4 py-2 shadow-sm">
                  View Project
                  <FontAwesomeIcon
                    icon={["fas", "arrow-up-right-from-square"]}
                    className="ms-2"
                  />
                </a>
              ) : (
                <button className="btn btn-primary px-4 py-2 shadow-sm" disabled>
                  Private Project
                  <FontAwesomeIcon
                    icon={["fas", "lock"]}
                    className="ms-2"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WorkCard.propTypes = {
  work: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    role: PropTypes.string,
    architecture: PropTypes.string,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(["fab", "fas", "fa"]).isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
    cloud: PropTypes.shape({
      type: PropTypes.string,
      name: PropTypes.string,
      color: PropTypes.string,
    }),
    keyAchievements: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string,
  }),
  index: PropTypes.number.isRequired,
};

export default WorkCard;
