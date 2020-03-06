import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReleaseDetail = props => {
  const { routerProps, releases } = props;
  const releaseId = parseInt(routerProps.match.params.releaseId);
  const release = releases.filter(item => item.id === releaseId);
//   const renderIcons = release => {
//     let status;
//     let species;
//     if (release.status === "Dead") {
//       status = " 💀";
//     } else if (release.status === "Alive") {
//       status = " ♡";
//     } else {
//       status = " ❔";
//     }
//     if (release.species === "Human") {
//       species = " 👤";
//     } else if (release.species === "Alien") {
//       species = " 👽";
//     }
//     return (
//       <p>
//         {status}
//         {species}
//       </p>
//     );
//   };
  if (release[0]) {
    const { title, label, year, artist, resource_url} = release[0];
    return (
      <React.Fragment>
        <div className="release_detail">
          {/* <div className="release_detail_icons">
            {renderIcons(release[0])}
          </div> */}
          <div className="release_detail_box">
            <img className="release_detail_box_img" alt={title} src={resource_url} />
          </div>
          <div className="release_detail_info">
            <h2 className="release_detail_info_name">{title}</h2>
            <p className="release_detail_info_artist">{artist}</p>
            <p className="release_detail_info_year">{year}</p>
            <p className="release_detail_info_label">
              {label}
            </p>
          </div>
        </div>
        <Link to="/" className="app__back">
          &larr; Back to the list
        </Link>
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