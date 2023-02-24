import React from "react";

export default function Searchbar(props) {
  const [searchState, setSearchState] = React.useState("");

  function inputHandler(e) {
    setSearchState(e.target.value);
  }

  function searchHandler(e) {
    e.preventDefault();
    props.handleSearch(searchState);
  }

  return (
    <form onSubmit={searchHandler} className="search-form">
      <input
        type="search"
        onChange={inputHandler}
        className="searchbar"
        placeholder="Enter show title..."
      />
      <button type="submit">search</button>
    </form>
  );
}
