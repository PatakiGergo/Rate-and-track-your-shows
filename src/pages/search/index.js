import Searchbar from "@/Components/Searchbar";
import SearchResultCard from "@/Components/Search-result-card";
import React from "react";
import HotCard from "@/Components/HotCard";

export default function Search() {
  const [results, setResults] = React.useState([]);

  const resultArr = results.map((item) => {
    return (
      <SearchResultCard
        name={item.show.name}
        image={
          item.show.image?.medium
            ? item.show.image?.medium
            : item.show.image?.src
        }
        key={item.show.id}
        imdbID={
          item.show.externals.imdb ? item.show.externals.imdb : item.show.id
        }
      />
    );
  });

  function searching(searchterm) {
    setResults([]);
    fetch(`https://api.tvmaze.com/search/shows?q=${searchterm}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        console.log(data);
      });
  }

  return (
    <div className="search-main">
      <Searchbar handleSearch={searching}></Searchbar>
      {resultArr}
      <div>
        <h1>Currently hot:</h1>
        <div className="hot-cards-container">
          <HotCard></HotCard>
          <HotCard></HotCard>
          <HotCard></HotCard>
          <HotCard></HotCard>
        </div>
      </div>
    </div>
  );
}
