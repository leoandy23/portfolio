import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ content }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="px-5 py-3 text-center">
        <div className="card-body">
          <div className="text-center">
            <FontAwesomeIcon
              icon={["fa", content.icon]}
              style={{ color: "var(--blue-ribbon-500)", fontSize: "2.5rem" }}
            />
          </div>
          <div className="text-center">
            <h6 className="fw-bold">{content.title}</h6>
          </div>
          <div className="text-center">
            <p className="text-center fs-6">{content.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Proptypes
ServiceCard.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;
