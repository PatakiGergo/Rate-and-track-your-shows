import React, { useState, useContext, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { TracklistContext } from "@/context/tracklist-context";

export default function TrackEpisodeAccordion(props) {
  const tracklistContext = useContext(TracklistContext);

  //code duplicationt majd fixálni

  const episode = "asd";

  function handleClick(e) {
    props.checkmarkHandler(props.id);
    e.stopPropagation();
  }

  return (
    <>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <input
            type="checkbox"
            onClick={handleClick}
            checked={
              props.seasonSeen
                ? true
                : tracklistContext.seenEpisodes.includes(props.data)
            }
            disabled={props.seasonSeen}
          />
          <Typography>{props.episode}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.summary} </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
