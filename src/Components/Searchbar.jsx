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
    <form onSubmit={searchHandler}>
      <input
        type="text"
        onChange={inputHandler}
        className="searchbar"
        placeholder="Enter show title..."
      />
      <button className="search-button">Search</button>
    </form>
  );
}
