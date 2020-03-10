import React from "react";
import Item from "./Item";


const FavList  = props => {
    const { pickedRelease, handleClick } = props;
    return (
      <section className="rightSection">
        <div className="clearCount">
          <p className="clearCount-p">{pickedRelease.length} releases</p>
          {/* <button className="clearCount-btn" onClick={clearAll}>
            Clear All
          </button> */}
        </div>
        <div>
          <ul className="cityPickedList">
            {pickedRelease.map(pickedRelease => (
              <li className="pickedReleaseItem">
                <Item
                  key={pickedRelease.id}
                  id={pickedRelease.id}
                  title={pickedRelease.title}
                  label={pickedRelease.label}
                  year={pickedRelease.year}
                  artist={pickedRelease.artist}
                  resource_url={pickedRelease.resource_url}
                  isFav={pickedRelease.isFav}
                //   clearAll={clearAll}
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
