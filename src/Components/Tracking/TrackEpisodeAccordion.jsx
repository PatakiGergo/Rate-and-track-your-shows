import React, { useState, useContext, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { TracklistContext } from "@/context/tracklist-context";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function TrackEpisodeAccordion(props) {
  const tracklistContext = useContext(TracklistContext);
  const summary = props.summary;

  const episodeSummary = () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = summary;

    const text = wrapper.textContent;

    return <div>{text}</div>;
  };
  //code duplicationt majd fixálni

  function handleClick(e) {
    props.checkmarkHandler(props.id);
    e.stopPropagation();
  }

  return (
    <>
      <Accordion
        sx={{
          backgroundColor:
            tracklistContext.seenEpisodes.includes(props.data) ||
            props.seasonSeen
              ? "green"
              : "white",
        }}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={
            <ArrowDownwardIcon
              sx={{
                cursor: "pointer",
              }}
            ></ArrowDownwardIcon>
          }
        >
          <input
            type="checkbox"
            onClick={handleClick}
            checked={
              props.seasonSeen
                ? true
                : tracklistContext.seenEpisodes.includes(props.data)
            }
            disabled={props.seen?.includes(props.season)}
          />
          <Typography>{props.episode}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{episodeSummary()} </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
