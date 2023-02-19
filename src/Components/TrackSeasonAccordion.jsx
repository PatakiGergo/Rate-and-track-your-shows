import React, { useState, useContext, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TrackEpisodeAccordion from "./TrackEpisodeAccordion";
import { TracklistContext } from "@/context/tracklist-context";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

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

  function seasonCheckmarkHandler(id) {
    tracklistContext.tracklistItems.map((show) => {
      if (show.title === props.title) {
        show.episodes.map((episode) => {
          if (episode.id === id) {
            //ide contextes method

            tracklistContext.handleSeenSeason(
              id,
              episode.name,
              show.title,
              episode.season
            );
          }
        });
      }
    });
  }

  const [seasonSeen, setWholeSeasonSeen] = useState(false);

  function setSeasonSeen(e) {
    if (seasonSeen) {
      e.stopPropagation();
      setWholeSeasonSeen(!seasonSeen);
      tracklistContext.tracklistItems.map((show) => {
        if (show.title === props.title) {
          show.episodes.map((episode) => {
            if (episode.season === props.season) {
              //ide contextes method

              tracklistContext.handleSeasonUndo(
                episode.id,
                episode.name,
                show.title,
                episode.season
              );
            }
          });
        }
      });
    } else {
      e.stopPropagation();
      tracklistContext.tracklistItems.map((show) => {
        if (show.title === props.title) {
          show.episodes.map((episode) => {
            if (episode.season === props.season) {
              seasonCheckmarkHandler(episode.id, e);
              setWholeSeasonSeen(!seasonSeen);
            }
          });
        }
      });
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
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={
            <KeyboardDoubleArrowDownIcon></KeyboardDoubleArrowDownIcon>
          }
        >
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
