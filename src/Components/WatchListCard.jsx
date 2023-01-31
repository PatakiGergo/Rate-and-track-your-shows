import React, { useContext } from "react";
import { WatchlistContext } from "@/context/watchlist-context";

export default function WatchlistCard(props) {
  const watchlistContext = React.useContext(WatchlistContext);

  function deleteHandler() {
    watchlistContext.remove(props.imdbID);
  }

  return (
    <div>
      <h1>{props.title} </h1>
      <h2>{props.imdbID} </h2>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
