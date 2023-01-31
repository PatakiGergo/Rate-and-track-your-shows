import React, { useContext } from "react";
import Image from "next/image";
import { WatchlistContext } from "@/context/watchlist-context";

export default function SearchResultCard(props) {
  const watchlistContext = useContext(WatchlistContext);

  console.log(watchlistContext);

  function watchlistHandler() {
    watchlistContext.addMovie(props.name, props.imdbID);
  }

  return (
    <div className="container">
      <img src={props.image} alt={`Image of ${props.name}`} />
      <div>
        <h1>{props.name}</h1>
        <h2>Alt</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, unde
          velit possimus ullam quo quidem suscipit consectetur in ipsam quisquam
          voluptatibus. Quasi aliquam expedita est optio consectetur ut dolor
          in.
        </h3>
      </div>
      <div>
        <button onClick={watchlistHandler}>Watchlist</button>
        <button>Track</button>
        <button>Add to toplist</button>
      </div>
    </div>
  );
}
