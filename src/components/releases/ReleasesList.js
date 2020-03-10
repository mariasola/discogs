import React from "react";
// import { Link } from "react-router-dom";
import Item from "./Item";

const ReleasesList = props => {
  const renderList = () => {
    return props.releases.map(item => {
      return (
        <li className="release" key={item.id}>
            {/* <Link
            to={`/release-detail/${item.id}`}
            className="release_link"
            > */}
              <Item 
              key={item.id}
              id= {item.id} 
              title={item.title}
              label={item.label}
              year={item.year}
              artist={item.artist}
              resource_url={item.resource_url}
              isFav={item.isFav}
              handleClick={props.handleClick}
              />
            {/* </Link> */}
        </li>
      );
    });
  };
  return (
    <section className="releases">
      <h2 className="main">Search</h2>
      <ul className="releases-list">{renderList()}</ul>
    </section>
  );
};

export default ReleasesList;