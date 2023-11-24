import React from "react";
import TECHS from "../../models/technologies.enum";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importamos con required el directorio de images
const images = require.context("../../assets/images/", true);

const WorkCard = ({ work, index }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="my-3">
      <div className="shadow p-3 rounded rounded-4">
        <div>
          <div
            className={`row align-items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}>
            <div className="col-12 col-md-6 ">
              <Slider
                {...sliderSettings}
                className="my-3"
                style={{
                  width: "80%",
                  margin: "auto",
                }}>
                {work.image.map((image, index) => (
                  <div key={index} className="d-flex justify-content-center">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noreferrer"
                      key={index}>
                      <img
                        src={images(`./${image}`)}
                        alt={work.title}
                        className="img-fluid rounded rounded-4 shadow"
                        style={{
                          maxHeight: "300px",
                        }}
                      />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-center mt-2">
                <h6 className="fw-bold section-subtitle">{work.title}</h6>
              </div>
              <p className="fs-6 text-justify">{work.description}</p>
              <div className="text-center">
                <h6 className="fw-bold">Tech Used</h6>
                {work.technologies.map((tech, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={[tech.type, tech.name]}
                    style={{
                      color: tech.color,
                      fontSize: "2.5rem",
                      margin: "0.5rem",
                    }}
                  />
                ))}
              </div>
              <div className="text-center mt-3">
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary">
                  View Project
                </a>
              </div>
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
  }),
  index: PropTypes.number.isRequired,
};

export default WorkCard;
