import React from "react";

const Item = props => {
const { releases } = props;
  console.log(props.releases.id);
  return (
    <React.Fragment>
          <img
            className="release-img"
            src={releases.resource_url}
            alt={releases.artist}
          />
          <div className="release-info">
            <h1 className="release-info-artist">{releases.artist}</h1>
            <p className="release-info-title">{releases.title}</p>
          </div>
    </React.Fragment>
  );
};

export default Item;