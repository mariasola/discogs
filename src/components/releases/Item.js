import React from "react";
import { Link } from "react-router-dom";

class Item  extends React.Component {
  constructor(props) {
    super(props);
    this.toggleRelease = this.toggleRelease.bind(this);
    // this.unselectCity = this.unselectCity.bind(this);
  }
  toggleRelease() {
    this.props.handleClick(this.props.id);
  }
  render(){
    const { id, title,artist,resource_url,isFav } = this.props;
    
    return (
      <React.Fragment>
            <button
            id={id}
            isFav={isFav}
            onClick={this.toggleRelease}
            >Click!</button>
            <Link
            to={`/release-detail/${id}`}
            className="release_link"
            >
            <img
              className="release-img"
              src={resource_url}
              alt={artist}
            />
            <div className="release-info">
              <h1 className="release-info-artist">{artist}</h1>
              <p className="release-info-title">{title}</p>
            </div>
            </Link>
      </React.Fragment>
    );
  }
}

export default Item;