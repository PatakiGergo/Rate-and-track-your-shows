import React, { useContext, useState } from "react";
import { TracklistContext } from "@/context/tracklist-context";
import ProgressBar from "./ProgressBar";
import TrackSeasonAccordion from "./TrackSeasonAccordion";
import RemoveButton from "../Buttons/RemoveButton";
import AddToToplistButton from "../Buttons/AddToToplist";

export default function OngoingCard(props) {
  //Card that contains the season and episode accordions
  const tracklist = useContext(TracklistContext);
  const episodes = props.episodes;
  const title = props.title;
  const seasonAccordionsArr = [];
  const id = props.imdbID;
  const seasonsSeen = props.seasonsSeen;
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
    <div className="ongoing">
      <div className="tracklist-card-image">
        <img src={props.img} alt={`Image of ${title}`} />
      </div>
      <div>
        <h1>Your {title} progress</h1>
        {seasonAccordions && seasonAccordionsArr}
        <div></div>

        <div className="ongoing-card-buttons">
          <RemoveButton type={"tracklist-delete"} id={id} />
          <AddToToplistButton
            name={title}
            id={id}
            from={"tracklist"}
            progress={calculateProgress()}
          ></AddToToplistButton>
        </div>

        <ProgressBar title={title} progress={calculateProgress()} />
      </div>
    </div>
  );
}
