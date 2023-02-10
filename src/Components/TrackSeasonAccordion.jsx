import React, { useState, useContext, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TrackEpisodeAccordion from "./TrackEpisodeAccordion";
import { TracklistContext } from "@/context/tracklist-context";

export default function TrackSeasonAccordion(props) {
  const episodes = props.episodes;
  const tracklistContext = useContext(TracklistContext);

  const season = props.season;
  const episodeAccordion = [
    <TrackEpisodeAccordion season={props.season} key={"placeholder"} />,
  ];

  const seasonEpisodes = [];
  const wholeSeries = props.wholeSeries;

  function episodeCheckmarkHandler(id) {
    tracklistContext.tracklistItems.map((show) => {
      if (show.title === props.title) {
        show.episodes.map((episode) => {
          if (episode.id === id) {
            //ide contextes method
            tracklistContext.handleSeen(id, episode.name, show.title);
          }
        });
      }
    });
  }

  const [seasonSeen, setWholeSeasonSeen] = useState(false);

  function setSeasonSeen(e) {
    e.stopPropagation();
    tracklistContext.tracklistItems.map((show) => {
      if (show.title === props.title) {
        show.episodes.map((episode) => {
          if (episode.season === props.season) {
            episodeCheckmarkHandler(episode.id, e);
            setWholeSeasonSeen(!seasonSeen);
          }
        });
      }
    });
  }

  episodes.forEach((episode) => {
    if (episode.season === season) {
      seasonEpisodes.push(
        <TrackEpisodeAccordion
          season={props.season}
          key={episode.id}
          episode={episode.name}
          summary={episode.summary}
          data={episode}
          wholeSeries={wholeSeries}
          title={props.title}
          checkmarkHandler={episodeCheckmarkHandler}
          id={episode.id}
          seasonSeen={seasonSeen}
        />
      );
    }
  });

  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <input type="checkbox" onClick={setSeasonSeen} />
          <Typography>
            {props.title} Season {props.season} accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {episodeAccordion && seasonEpisodes}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
