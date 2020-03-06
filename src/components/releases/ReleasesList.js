import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

const ReleasesList = props => {
  const renderList = () => {
    return props.releases.map(releases => {
      return (
        <li className="release" key={releases.id}>
            <Link
            to={`/release-detail/${releases.id}`}
            className="release_link"
            >
              <Item releases={releases} />
            </Link>
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