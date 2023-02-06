import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TrackEpisodeAccordion from "./TrackEpisodeAccordion";

export default function TrackSeasonAccordion(props) {
  const episodes = props.episodes;

  const season = props.season;
  const episodeAccordion = [
    <TrackEpisodeAccordion season={props.season} key={"placeholder"} />,
  ];

  const seasonEpisodes = [];
  const wholeSeries = props.wholeSeries;

  const [idsOfSeen, setId] = useState([]);
  const [seenSeason, setSeenSeason] = useState(false);
  const [progress, setProgress] = useState(0);

  function seenHandler(seriesid) {
    if (idsOfSeen.includes(seriesid)) {
      setId((prev) => {
        setProgress((prevProgress) => prevProgress - 1);
        return prev.filter((item) => item != seriesid);
      });
    } else {
      setId((prev) => [...prev, seriesid]);
      setProgress((prevProgress) => prevProgress + 1);
    }
  }

  props.progressHandler(progress);

  if (idsOfSeen.length === episodes.length && !seenSeason) {
    setSeenSeason(true);
    setId(
      episodes.map((episode) => {
        if (episode.season === season) {
          return episode.id;
        }
      })
    );
  }

  function seasonSeenHandler(e) {
    e.stopPropagation();
    if (idsOfSeen.length === episodes.length) {
      setId([]);
      setSeenSeason(false);
    } else {
      setSeenSeason(true);
      setId(
        episodes.map((episode) => {
          if (episode.season === season) {
            return episode.id;
          }
        })
      );
    }
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
          seen={idsOfSeen.includes(episode.id)}
          seenHandler={seenHandler}
          seenSeason={seenSeason}
          seenEpisode={episode.seen}
        />
      );
    }
  });

  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <input
            type="checkbox"
            onClick={seasonSeenHandler}
            checked={seenSeason}
          />
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
