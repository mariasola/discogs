import React from "react";
import { Switch, Route } from "react-router-dom";
import releases from "./services/getData";
import Header from "./components/commons/Header";
import Home from "./components/pages/Home";
import ReleaseDetail from "./components/pages/ReleaseDetail";
import "./styles/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      releases:releases.map(
        item=>
          (item={
            id: item.id,
            title:item.title,
            label:item.label,
            year:item.year,
            artist:item.artist,
            resource_url:item.resource_url,
            community:item.stats,
            isFav:false
          }

          )
      ),
      filterValue:""
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleFilter(event) {
    const newState = {
      ...this.state,
      filterValue: event.currentTarget.value
    };
    this.setState(newState);
  }
  handleClick(idClicked, newStatus) {
    this.setState(prevState => {
      const releases = prevState.releases.map(release => {
        if (release.id === idClicked) {
          if (newStatus !== undefined) {
            release.isFav = newStatus;
          } else {
            release.isFav = !release.isFav;
          }
        }
        return release;
      });
      return {
        releases: releases
      };
    });
  }

  render() {
    const filteredReleases = this.state.releases.filter(release =>
      release.title
        .toLowerCase()
        .includes(this.state.filterValue.toLowerCase())
    );
    const pickedRelease = this.state.releases.filter(release => {
      return release.isFav;
    });
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  handleFilter={this.handleFilter}
                  releases={filteredReleases}
                  handleClick={this.handleClick}
                  pickedRelease={pickedRelease}
                />
              );
            }}
          />
          <Route
            path="/release-detail/:releaseId"
            render={routerProps => {
              return (
                <ReleaseDetail
                  routerProps={routerProps}
                  releases={filteredReleases}
                />
              );
            }}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
