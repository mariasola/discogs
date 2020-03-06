import React from "react";

const Filters = props => {
  const { handleFilter } = props;
  return (
    <form className="filter">
      <label className="filter_label">What are you looking for?</label>
      <input
        type="text"
        onChange={handleFilter}
        className="filter_input"
      ></input>
    </form>
  );
};

export default Filters;