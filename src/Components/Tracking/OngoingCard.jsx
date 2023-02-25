/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { TracklistContext } from "@/context/tracklist-context";
import ProgressBar from "./ProgressBar";
import TrackSeasonAccordion from "./TrackSeasonAccordion";
import RemoveButton from "../Buttons/RemoveButton";
import AddToToplistButton from "../Buttons/AddToToplist";

export default function OngoingCard({
  episodes,
  title,
  imdbID,
  seasonsSeen,
  img,
}) {
  //Card that contains the season and episode accordions
  const tracklist = useContext(TracklistContext);
  const seasonAccordionsArr = [];
  const numberOfEpisodes = episodes.length;

  //rendering an accordion for each season there by checking the last elements season property
  const [seasonAccordions, setSeasonAccordions] = useState([
    <TrackSeasonAccordion key={"none"} />,
  ]);

  const SEASON_NUMBER = episodes[episodes.length - 1].season;

  for (let i = 0; i < SEASON_NUMBER; i++) {
    seasonAccordionsArr.push(
      <TrackSeasonAccordion
        key={i}
        season={i + 1}
        title={title}
        episodes={episodes}
        wholeSeries={episodes}
        seen={seasonsSeen}
      />
    );
    if (i === SEASON_NUMBER) {
      setSeasonAccordions(seasonAccordionsArr);
    }
  }

  function calculateProgress() {
    let seenNumber = 0;
    tracklist.tracklistItems.forEach((show) => {
      if (show.title === title) {
        show.episodes.map((episode) => {
          if (tracklist.seenEpisodes.includes(episode)) {
            seenNumber = seenNumber + 1;
          }
        });
      }
    });
    return seenNumber / numberOfEpisodes;
  }

  return (
    <section className="ongoing">
      <div className="tracklist-card-image">
        <img src={img} alt={`Image of ${title}`} />
      </div>
      <div>
        <h1>Your {title} progress</h1>
        {seasonAccordions && seasonAccordionsArr}

        <div className="ongoing-card-buttons">
          <RemoveButton type={"tracklist-delete"} id={imdbID} />
          <AddToToplistButton
            name={title}
            id={imdbID}
            from={"tracklist"}
            progress={calculateProgress()}
          ></AddToToplistButton>
        </div>

        <ProgressBar title={title} progress={calculateProgress()} />
      </div>
    </section>
  );
}
