import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReleaseDetail = props => {
  const { routerProps, releases } = props;
  const releaseId = parseInt(routerProps.match.params.releaseId);
  const release = releases.filter(item => item.id === releaseId);
  if (release[0]) {
    const { title, label, year, artist, resource_url} = release[0];
    return (
      <React.Fragment>
        <div className="releaseDetail">
          <div className="releaseDetail-box">
            <img className="releaseDetail-box-img" alt={title} src={resource_url} />
          </div>
          <div className="releaseDetail-info">
            <h2 className="releaseDetail-info-name">{title}</h2>
            <p className="releaseDetail-info-artist">{artist}</p>
            <p className="releaseDetail-info-year">{year}</p>
            <p className="releaseDetail-info-label">
              {label}
            </p>
          </div>
        
        <Link to="/" className="releaseDetail-link">
          &larr; Back to the list
        </Link>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Cargando...</p>
        <Link to="/" className="app__back">
          &larr; Back to the list
        </Link>
      </React.Fragment>
    );
  }
};
ReleaseDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  releases: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ReleaseDetail;