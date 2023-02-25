import React, { useReducer, useContext } from "react";
import { ToplistContext } from "@/context/toplist-context";
import { WatchlistContext } from "@/context/watchlist-context";
import { TracklistContext } from "@/context/tracklist-context";

export default function RemoveButton({ type, id }) {
  const [state, dispatch] = useReducer(reducer, { type: "asdasd" });
  const toplistContext = useContext(ToplistContext);
  const watchlistContext = useContext(WatchlistContext);
  const tracklistContext = useContext(TracklistContext);

  //checking the removals type
  function reducer(state, action) {
    switch (action.type) {
      case "tracklist-delete":
        tracklistContext.remove(id);
        break;
      case "watchlist-delete":
        watchlistContext.remove(id);
        break;
      case "toplist-delete":
        toplistContext.remove(id);
        break;
    }
  }

  function handleClick() {
    reducer("asd", { type });
  }

  return (
    <>
      <button onClick={handleClick}>Remove</button>
    </>
  );
}
