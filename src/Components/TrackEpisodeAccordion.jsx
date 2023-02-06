import React, { useState, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { TracklistContext } from "@/context/tracklist-context";

export default function TrackEpisodeAccordion(props) {
  const tracklistContext = useContext(TracklistContext);

  //code duplicationt majd fixálni

  tracklistContext.tracklistItems.forEach((item, i) => {
    if (item.title === props.title) {
      item.episodes.forEach((item, i) => {
        if (
          item.number === props.data.number &&
          item.season === props.data.season
        ) {
          item.seen = props.seen;
        }
      });
    }
  });

  function checkBoxHandler(e) {
    e.stopPropagation();
    props.seenHandler(props.data.id);

    tracklistContext.tracklistItems.forEach((item, i) => {
      if (item.title === props.title) {
        item.episodes.forEach((item, i) => {
          if (
            item.number === props.data.number &&
            item.season === props.data.season
          ) {
            item.seen = !item.seen;
          }
        });
      }
    });
  }

  /* console.log(tracklistContext.calculateProgress(props.title)) */

  return (
    <>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <input
            type="checkbox"
            onClick={checkBoxHandler}
            checked={props.seenEpisode}
            disabled={props.seenSeason}
          />
          <Typography>
            {props.episode} {props.seen ? "seen" : "not seen"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.summary} </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
