import React from "react";
import ReleasesList from "../releases/ReleasesList";
import Filters from "../commons/Filters";
import FavList from "../releases/FavList";

const Home = props => {
  const { handleFilter, releases, handleClick, pickedRelease } = props;
  return (
    <main className="App">
      <Filters handleFilter={handleFilter} />
      <ReleasesList releases={releases} handleClick={handleClick}/>
      <FavList handleClick={handleClick} pickedRelease={pickedRelease}></FavList>
    </main>
  );
};

export default Home;