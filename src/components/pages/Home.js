import React from "react";
import ReleasesList from "../releases/ReleasesList";
import FavList from "../releases/FavList";

const Home = props => {
  const { releases, handleClick, pickedRelease, clearAll, loadMore, visible } = props;
  return (
    <main className="App">
      <ReleasesList releases={releases} handleClick={handleClick} loadMore={loadMore} visible={visible}/>
      <FavList handleClick={handleClick} pickedRelease={pickedRelease} clearAll={clearAll}></FavList>
    </main>
  );
};

export default Home;