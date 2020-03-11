import React from "react";
import Item from "./Item";
import LoadMoreButton from "../commons/LoadMoreButton"

const ReleasesList = props => {
  console.log(props);
  const renderList = () => {
    return props.releases.slice(0, props.visible).map(item => {
      return (
        <li className="release" key={item.id}>
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
        </li>
      );
    });
  };
  return (
    <section className="releases">
      <ul className="releases-list">{renderList()}</ul>
      {props.visible < props.releases.length &&
             <LoadMoreButton loadMore={props.loadMore} type="button" className="load-more">Load more</LoadMoreButton>
          }
    </section>
  );
};

export default ReleasesList;