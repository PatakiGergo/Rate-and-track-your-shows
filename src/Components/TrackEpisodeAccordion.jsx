import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function TrackEpisodeAccordion(props) {
  props.data.seen = false;
  const [seen, setSeen] = useState(props.data.seen);
  function checkBoxHandler(e) {
    e.stopPropagation();

    /*    props.wholeSeason.map((episode) => {
      if (episode.number < props.data.number) {
        episode.seen = !episode.seen;
        console.log(episode.seen);
      }
    });
    props.data.seen = !props.data.seen;
    setSeen((prev) => !prev);
    console.log(props.data);
    console.log("episodes", props.wholeSeason); */
  }

  return (
    <>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <input type="checkbox" onClick={checkBoxHandler} />
          <Typography>
            {props.episode} {seen ? "seen" : "not seen"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.summary} </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
