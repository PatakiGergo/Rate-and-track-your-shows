import Searchbar from "@/Components/Search/Searchbar";
import SearchResultCard from "@/Components/Search/Search-result-card";
import React from "react";
import HotCard from "@/Components/Search/HotCard";
import Head from "next/head";

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
        description={item.show.summary}
        genres={item.show.genres}
      />
    );
  });

  function searching(searchterm) {
    setResults([]);
    fetch(`https://api.tvmaze.com/search/shows?q=${searchterm}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      });
  }

  return (
    <html>
      <Head>
        <title>Search</title>
      </Head>
      <body>
        <div className="search-main">
          <Searchbar handleSearch={searching}></Searchbar>
          {resultArr}
          <div>
            <h1 className="trending">Trending shows: </h1>
            <div className="hot-cards-container">
              <HotCard
                title={"Wednesday"}
                id={"tt13443470"}
                image={
                  "https://ntvb.tmsimg.com/assets/p23063500_b_h8_ad.jpg?w=960&h=540"
                }
                description={
                  "Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents."
                }
              />
              <HotCard
                title={"Last of Us"}
                id={"tt3581920"}
                image={
                  "https://s.24.hu/app/uploads/2023/02/the-last-of-us-serie-hbo-1673816891.jpg"
                }
                description={
                  "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope."
                }
              />
              <HotCard
                title={"You"}
                id={"tt7335184"}
                image={
                  "https://yt3.googleusercontent.com/99-ihtbZVJQIaGaK6NhPtL8uPhv1giertqEeTIkICWqnnQRPL4-qJ1Zri8VycOeu8HKTomR0rg"
                }
                description={
                  "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by."
                }
              />
              <HotCard
                title={"Yellowstone"}
                id={"tt4236770"}
                image={
                  "https://www.usmagazine.com/wp-content/uploads/2022/03/Yellowstone-Casts-Pre-Show-Hits-Where-Youve-Seen-Stars-Before-001.jpg?quality=86&strip=all"
                }
                description={
                  "A ranching family in Montana faces off against others encroaching on their land."
                }
              />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
