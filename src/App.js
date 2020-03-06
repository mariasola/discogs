import React from "react";
import { Switch, Route } from "react-router-dom";
import getData from "./services/getData";
import Header from "./components/commons/Header";
import Home from "./components/pages/Home";
import ReleaseDetail from "./components/pages/ReleaseDetail";
import "./styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      releases:[],
      filterValue:"",
      isFav: false
    };
    this.handleFilter = this.handleFilter.bind(this);
  }
  componentDidMount() {
    getData().then(releases => {
      this.setState({ releases });
    });
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
            release.isPicked = newStatus;
          } else {
            release.isPicked = !release.isPicked;
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
