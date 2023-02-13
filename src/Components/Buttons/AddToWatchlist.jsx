import React, { useState, useContext } from "react";
import { WatchlistContext } from "@/context/watchlist-context";
import { ToplistContext } from "@/context/toplist-context";
import { TracklistContext } from "@/context/tracklist-context";
import { Alert } from "@mui/material";

export default function AddToWatchlistButton(props) {
  const watchlistContext = useContext(WatchlistContext);
  const toplistContext = useContext(ToplistContext);
  const tracklistContext = useContext(TracklistContext);
  const [noSuccess, setNoSuccess] = useState(false);
  const [list, setList] = useState("Toplist");

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
    } else {
      watchlistContext.addMovie(
        props.name,
        props.imdbID,
        props.image,
        props.description
      );
    }
  }

  return (
    <>
      {noSuccess && (
        <Alert
          variant="filled"
          severity="error"
          sx={{
            position: "fixed",
            top: "15px",
            right: "850px",

            zIndex: "9999",
            margin: "0 auto",
          }}
        >
          This item is already on your {list}
        </Alert>
      )}
      <button className={props.class} onClick={watchlistHandler}>
        Watchlist
      </button>
    </>
  );
}
