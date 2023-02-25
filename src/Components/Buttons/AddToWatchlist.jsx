import React, { useState, useContext } from "react";
import { WatchlistContext } from "@/context/watchlist-context";
import { ToplistContext } from "@/context/toplist-context";
import { TracklistContext } from "@/context/tracklist-context";
import UserAlert from "../Alerts/UserAlert";

export default function AddToWatchlistButton({
  name,
  imdbID,
  image,
  description,
}) {
  const watchlistContext = useContext(WatchlistContext);
  const toplistContext = useContext(ToplistContext);
  const tracklistContext = useContext(TracklistContext);
  const [noSuccess, setNoSuccess] = useState(false);
  const [list, setList] = useState("Toplist");
  const [added, setAdded] = useState(false);

  function delay(timeInMs) {
    setNoSuccess(true);
    setTimeout(() => {
      setNoSuccess(false);
    }, timeInMs);
  }

  function watchlistHandler() {
    if (toplistContext.toplistItems.some((item) => item.title === name)) {
    } else if (
      tracklistContext.tracklistItems.some((item) => item.title === name)
    ) {
      setList("tracklist");
      delay(1500);
    } else if (
      watchlistContext.watchlistItems.some((item) => item.title === name)
    ) {
      setList("watchlist");
      delay(1500);
    } else {
      watchlistContext.addMovie(name, imdbID, image, description);
      setAdded(true);
      delay(1500);
    }
  }

  return (
    <>
      {added && (
        <UserAlert
          type={"success"}
          message={`${name} successfully added to your watchlist `}
        ></UserAlert>
      )}
      {noSuccess && (
        <UserAlert
          type={"error"}
          message={`${name} is already on your ${list}`}
        ></UserAlert>
      )}
      <button onClick={watchlistHandler}>Watchlist</button>
    </>
  );
}
