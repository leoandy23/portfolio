import React, { useState } from "react";
import TECHS from "../../models/technologies.enum";
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

  return (
    <div className="my-4">
      <div className="work-card shadow-lg p-3 rounded-4">
        <div
          className={`row align-items-center ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          }`}>
          <div className="col-12 col-md-6 p-3 p-md-4">
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
          </div>

          <div className="col-12 col-md-6">
            <div className="text-center mt-2">
              <h5 className="fw-bold text-primary">{work.title}</h5>
            </div>

            <p className="fs-6 text-justify my-3">{work.description}</p>

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
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(["fab", "fa"]).isRequired,
        name: PropTypes.oneOf(Object.values(TECHS).map((tech) => tech.name))
          .isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
    category: PropTypes.string, // Nueva propType para la categoría
  }),
  index: PropTypes.number.isRequired,
};

export default WorkCard;
