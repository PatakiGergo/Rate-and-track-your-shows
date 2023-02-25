import React, { useState, useContext, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { TracklistContext } from "@/context/tracklist-context";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function TrackEpisodeAccordion({
  summary,
  id,
  data,
  seen,
  season,
  seasonSeen,
  checkmarkHandler,
  episode,
}) {
  const tracklistContext = useContext(TracklistContext);

  const episodeSummary = () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = summary;

    const text = wrapper.textContent;

    return <div>{text}</div>;
  };
  //code duplicationt majd fixálni

  function handleClick(e) {
    checkmarkHandler(id);
    e.stopPropagation();
  }

  return (
    <>
      <Accordion
        sx={{
          backgroundColor:
            tracklistContext.seenEpisodes.includes(data) || seasonSeen
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
              seasonSeen ? true : tracklistContext.seenEpisodes.includes(data)
            }
            disabled={seen?.includes(season)}
          />
          <Typography>{episode}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{episodeSummary()} </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
