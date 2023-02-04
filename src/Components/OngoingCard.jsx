import React, { useContext, useState, useEffect } from "react";
import { TracklistContext } from "@/context/tracklist-context";

import TrackSeasonAccordion from "./TrackSeasonAccordion";

export default function OngoingCard(props) {
  const tracklist = useContext(TracklistContext);

  const episodes = props.episodes;

  const seasonAccordions = episodes.map((item) => {
    const arr = [];
    arr.push(item.season);
  });

  return (
    <div>
      <h1>{props.title} </h1>
      <TrackSeasonAccordion></TrackSeasonAccordion>
    </div>
  );
}
