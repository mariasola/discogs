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
      releases: releases.map(item => ({
        ...item,
        community: item.stats,
        isFav: false
      })),
      visible: 4,
      filterValue: ""
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.loadMore = this.loadMore.bind(this);
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
  loadMore() {
    this.setState(prev => {
      return { visible: prev.visible + 4 };
    });
  }
  clearAll() {
    this.setState(prevState => {
      const releases = prevState.releases.map(release => {
        release.isFav = false;
        return release;
      });
      return {
        releases: releases
      };
    });
  }

  render() {
    const filteredReleases = this.state.releases.filter(
      release =>
        release.title
          .toLowerCase()
          .includes(this.state.filterValue.toLowerCase()) ||
        release.artist
          .toLowerCase()
          .includes(this.state.filterValue.toLowerCase())
    );
    const pickedRelease = this.state.releases.filter(release => {
      return release.isFav;
    });
    return (
      <React.Fragment>
        <Header handleFilter={this.handleFilter} />
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
                  clearAll={this.clearAll}
                  loadMore={this.loadMore}
                  visible={this.state.visible}
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
