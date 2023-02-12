import React, { useReducer, useContext } from "react";
import { ToplistContext } from "@/context/toplist-context";
import { WatchlistContext } from "@/context/watchlist-context";
import { TracklistContext } from "@/context/tracklist-context";

export default function RemoveButton(props) {
  const [state, dispatch] = useReducer(reducer, { type: "asdasd" });
  const toplistContext = useContext(ToplistContext);
  const watchlistContext = useContext(WatchlistContext);
  const tracklistContext = useContext(TracklistContext);

  function reducer(state, action) {
    switch (action.type) {
      case "tracklist-delete":
        tracklistContext.remove(props.id);
        break;
      case "watchlist-delete":
        watchlistContext.remove(props.id);
        break;
      case "toplist-delete":
        toplistContext.remove(props.id);
        console.log("reducerből", props.id);
        break;
    }
  }

  function handleClick() {
    reducer("asd", { type: props.type });
  }

  return (
    <>
      <button onClick={handleClick}>Remove</button>
    </>
  );
}
