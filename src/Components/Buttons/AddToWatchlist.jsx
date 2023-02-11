import React, { useReducer, useContext } from "react";
import { WatchlistContext } from "@/context/watchlist-context";

export default function AddToWatchlistButton(props) {
  const watchlistContext = useContext(WatchlistContext);

  function watchlistHandler() {
    watchlistContext.addMovie(props.name, props.imdbID);
  }

  return (
    <button className={props.class} onClick={watchlistHandler}>
      Watchlist
    </button>
  );
}
