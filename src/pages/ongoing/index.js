import React, { useContext } from "react";

import { TracklistContext } from "@/context/tracklist-context";
import OngoingCard from "@/Components/OngoingCard";

export default function Tracklist(props) {
  const tracklist = useContext(TracklistContext).tracklistItems;

  const tracklistItems = tracklist.map((item) => {
    return (
      <OngoingCard
        title={item.title}
        imdbID={item.id}
        key={item.id}
        episodes={item.episodes}
        img={item.img}
      />
    );
  });

  return <div className="tracklist-container">{tracklistItems}</div>;
}
