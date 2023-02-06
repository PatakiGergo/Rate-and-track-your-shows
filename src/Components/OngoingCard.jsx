import React, { useContext, useState, useEffect } from "react";
import { TracklistContext } from "@/context/tracklist-context";
import ProgressBar from "./ProgressBar";

import TrackSeasonAccordion from "./TrackSeasonAccordion";
import RemoveButton from "./Buttons/RemoveButton";

export default function OngoingCard(props) {
  const [progress, setProgress] = useState(0);
  const [seasonAccordions, setSeasonAccordions] = useState([
    <TrackSeasonAccordion key={"none"} />,
  ]);
  const tracklist = useContext(TracklistContext);

  //rendering an accordion for each season there by checking the last elements season property

  const episodes = props.episodes;
  const seasonNumber = episodes[episodes.length - 1].season;
  const seasonAccordionsArr = [];
  const id = props.imdbID;

  function progressHandler(progress) {
    setProgress(progress);
  }

  for (let i = 0; i < seasonNumber; i++) {
    seasonAccordionsArr.push(
      <TrackSeasonAccordion
        key={i}
        season={i + 1}
        title={props.title}
        episodes={props.episodes}
        wholeSeries={episodes}
        progressHandler={progressHandler}
      />
    );
    if (i === seasonNumber) {
      setSeasonAccordions(seasonAccordionsArr);
    }
  }

  return (
    <div>
      <h1>{props.title} </h1>
      {seasonAccordions && seasonAccordionsArr}
      <div></div>
      <RemoveButton type={"tracklist-delete"} id={id} />
      <ProgressBar title={props.title} progress={progress} />
    </div>
  );
}
