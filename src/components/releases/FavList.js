import React from "react";
import Item from "./Item";
import ClearAll from "../commons/ClearAll"


const FavList  = props => {
    const { pickedRelease, handleClick, clearAll } = props;
    return (
      <section className="favSection">
        <h2 className="favSection-title">Your collection</h2>
        <div className="favSection-clearCount">
          <p className="favSection-clearCount-p">{pickedRelease.length} releases</p>
          <ClearAll className="favSection-clearCount-btn" clearAll={clearAll}>
            Clear All
          </ClearAll>
        </div>
        <div className="favSection-pickedReleases">
          <ul className="favSection-pickedReleases-list">
            {pickedRelease.map(pickedRelease => (
              <li className="favSection-pickedReleases-list-item">
                <Item
                  key={pickedRelease.id}
                  id={pickedRelease.id}
                  title={pickedRelease.title}
                  label={pickedRelease.label}
                  year={pickedRelease.year}
                  artist={pickedRelease.artist}
                  resource_url={pickedRelease.resource_url}
                  isFav={pickedRelease.isFav}
                  clearAll={clearAll}
                  handleClick={handleClick}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
}

export default FavList;
