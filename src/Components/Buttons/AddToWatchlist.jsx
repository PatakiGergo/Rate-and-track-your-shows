import React, { useState, useContext } from "react";
import { WatchlistContext } from "@/context/watchlist-context";
import { ToplistContext } from "@/context/toplist-context";
import { TracklistContext } from "@/context/tracklist-context";
import UserAlert from "../UserAlert";

export default function AddToWatchlistButton(props) {
  const watchlistContext = useContext(WatchlistContext);
  const toplistContext = useContext(ToplistContext);
  const tracklistContext = useContext(TracklistContext);
  const [noSuccess, setNoSuccess] = useState(false);
  const [list, setList] = useState("Toplist");
  const [added, setAdded] = useState(false);

  function watchlistHandler() {
    if (toplistContext.toplistItems.some((item) => item.title === props.name)) {
      setNoSuccess(true);
      setTimeout(() => {
        setNoSuccess(false);
      }, 1500);
    } else if (
      tracklistContext.tracklistItems.some((item) => item.title === props.name)
    ) {
      setList("tracklist");
      setNoSuccess(true);
      setTimeout(() => {
        setNoSuccess(false);
      }, 1500);
    } else if (
      watchlistContext.watchlistItems.some((item) => item.title === props.name)
    ) {
      setList("watchlist");
      setNoSuccess(true);
      setTimeout(() => {
        setNoSuccess(false);
      }, 1500);
    } else {
      watchlistContext.addMovie(
        props.name,
        props.imdbID,
        props.image,
        props.description
      );
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
      }, 1500);
    }
  }

  return (
    <>
      {added && (
        <UserAlert
          type={"success"}
          message={`${props.name} successfully added to your watchlist `}
        ></UserAlert>
      )}
      {noSuccess && (
        <UserAlert
          type={"error"}
          message={`${props.name} is already on your ${list}`}
        ></UserAlert>
      )}
      <button className={props.class} onClick={watchlistHandler}>
        Watchlist
      </button>
    </>
  );
}
