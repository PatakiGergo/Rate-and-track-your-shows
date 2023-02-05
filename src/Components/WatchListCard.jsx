import React, { useContext, useState } from "react";
import { WatchlistContext } from "@/context/watchlist-context";
import RemoveButton from "./Buttons/RemoveButton";

export default function WatchlistCard(props) {
  const id = props.imdbID;

  return (
    <div>
      <h1>{props.title} </h1>
      <h2>{props.imdbID} </h2>

      <RemoveButton type={"watchlist-delete"} id={id} />
    </div>
  );
}
