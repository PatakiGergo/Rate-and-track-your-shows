import React, { useState, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TrackEpisodeAccordion from "./TrackEpisodeAccordion";
import { TracklistContext } from "@/context/tracklist-context";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function TrackSeasonAccordion(props) {
  const tracklistContext = useContext(TracklistContext);
  const trackedShows = tracklistContext.tracklistItems;
  const episodes = props.episodes;
  const season = props.season;
  const title = props.title;
  const wholeSeries = props.wholeSeries;
  const seen = props.seen;

  const [seasonSeen, setWholeSeasonSeen] = useState(seen?.includes(season));

  const episodeAccordion = [
    <TrackEpisodeAccordion season={props.season} key={"placeholder"} />,
  ];

  function findShow(title) {
    const show = trackedShows.find((show) => show.title === title);
    return show;
  }

  //handling checkmark on episode accordion
  function episodeCheckmarkHandler(id) {
    const show = findShow(title);
    const episodes = show.episodes;
    episodes.forEach((episode) => {
      if (episode.id === id) {
        tracklistContext.handleSeen(id, episode.name, show.title);
        return;
      }
    });
  }

  //handling checkmark on season accordion
  function seasonCheckmarkHandler(id) {
    const show = findShow(title);
    const episodes = show.episodes;
    episodes.forEach((episode) => {
      if (episode.id === id) {
        tracklistContext.handleSeenSeason(
          id,
          episode.name,
          show.title,
          props.season
        );
        return;
      }
    });
  }

  function setSeasonSeen(e) {
    e.stopPropagation();
    if (seasonSeen) {
      const show = findShow(title);
      show.episodes.forEach((episode) => {
        if (episode.season === season) {
          setWholeSeasonSeen(false);
          tracklistContext.handleSeasonUndo(
            episode.id,
            episode.name,
            show.title,
            episode.season
          );
        }
      });
    } else {
      const show = findShow(title);
      show.episodes.forEach((episode) => {
        if (episode.season === season) {
          seasonCheckmarkHandler(episode.id, e);
          setWholeSeasonSeen(!seasonSeen);
        }
      });
    }
  }

  const seasonEpisodes = episodes.map((episode) => {
    if (episode.season === season) {
      return (
        <TrackEpisodeAccordion
          season={season}
          key={episode.id}
          episode={episode.name}
          summary={episode.summary}
          data={episode}
          wholeSeries={wholeSeries}
          title={title}
          checkmarkHandler={episodeCheckmarkHandler}
          id={episode.id}
          seasonSeen={seasonSeen}
          seen={seen}
          seasonSetter={setSeasonSeen}
        />
      );
    }
  });

  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: seasonSeen ? "green" : "white",
        }}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={
            <KeyboardDoubleArrowDownIcon></KeyboardDoubleArrowDownIcon>
          }
        >
          <input type="checkbox" onClick={setSeasonSeen} checked={seasonSeen} />
          <Typography>
            {title} Season {season} accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {episodeAccordion && seasonEpisodes}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
