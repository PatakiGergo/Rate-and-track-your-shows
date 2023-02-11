import React, { useContext, useState, useEffect } from "react";
import tracklistContext, {
  TracklistContext,
} from "@/context/tracklist-context";
import ProgressBar from "./ProgressBar";

import TrackSeasonAccordion from "./TrackSeasonAccordion";
import RemoveButton from "./Buttons/RemoveButton";
import AddToToplistButton from "./Buttons/AddToToplist";

export default function OngoingCard(props) {
  const [seasonAccordions, setSeasonAccordions] = useState([
    <TrackSeasonAccordion key={"none"} />,
  ]);
  const tracklist = useContext(TracklistContext);

  //rendering an accordion for each season there by checking the last elements season property

  const episodes = props.episodes;
  const seasonNumber = episodes[episodes.length - 1].season;
  const seasonAccordionsArr = [];
  const id = props.imdbID;

  for (let i = 0; i < seasonNumber; i++) {
    seasonAccordionsArr.push(
      <TrackSeasonAccordion
        key={i}
        season={i + 1}
        title={props.title}
        episodes={props.episodes}
        wholeSeries={episodes}
      />
    );
    if (i === seasonNumber) {
      setSeasonAccordions(seasonAccordionsArr);
    }
  }
  const progress = 5;

  const episodeNumber = episodes.length;

  function calculateProgress() {
    let seenNumber = 0;
    tracklist.tracklistItems.map((show) => {
      if (show.title === props.title) {
        show.episodes.map((episode) => {
          if (tracklist.seenEpisodes.includes(episode)) {
            seenNumber = seenNumber + 1;
          }
        });
      }
    });
    return "ez a progress", seenNumber / episodeNumber;
  }

  return (
    <div className="ongoing">
      <h1>Your {props.title} progress</h1>
      {seasonAccordions && seasonAccordionsArr}
      <div></div>
      <RemoveButton type={"tracklist-delete"} id={id} />
      <AddToToplistButton name={props.title}></AddToToplistButton>
      <ProgressBar title={props.title} progress={calculateProgress()} />
    </div>
  );
}
