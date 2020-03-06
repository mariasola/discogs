import React from "react";
import ReleasesList from "../releases/ReleasesList";
import Filters from "../commons/Filters";

const Home = props => {
  const { handleFilter, releases } = props;
  return (
    <main className="App">
      <Filters handleFilter={handleFilter} />
      <ReleasesList releases={releases} />
    </main>
  );
};

export default Home;