import React, { useState, useContext, useEffect, memo } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { TracklistContext } from "@/context/tracklist-context";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function TrackEpisodeAccordion({
  summary,
  id,
  data,
  seen,
  season,
  seasonSeen,
  checkmarkHandler,
  episode,
  seenEpisodes,
}) {
  const tracklistContext = useContext(TracklistContext);

  const [seenEpisodeItem, setSeenEpisodeItem] = useState([]);

  useEffect(() => {
    const seenEpisodeItem = JSON.parse(localStorage.getItem("seenEpisodes"));
    setSeenEpisodeItem(seenEpisodeItem);
    console.log("seenEpisodeItem", seenEpisodeItem);
  }, [episode]);

  const episodeSummary = () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = summary;

    const text = wrapper.textContent;

    return <div>{text}</div>;
  };
  //code duplicationt majd fixálni

  function handleClick(e) {
    setSeenEpisodeItem(seenEpisodeItem.filter((item) => item === data));
    checkmarkHandler(id);
    e.stopPropagation();
  }

  console.log("seenEpisodeItem", seenEpisodeItem, "data", data);
  console.log(
    "datainklúúúd",
    seenEpisodeItem.includes((item) => item.id === data.id)
  );

  function checking(how) {
    let bool = false;
    seenEpisodeItem.forEach((item) => {
      if (item.id === data.id) {
        bool = true;
      }
    });
    if (tracklistContext.seenEpisodes.includes(data)) {
      bool = true;
    }
    return bool;
  }

  return (
    <>
      <Accordion
        sx={{
          backgroundColor:
            tracklistContext.seenEpisodes.includes(data) || checking()
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
            checked={checking()}
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

export default memo(TrackEpisodeAccordion);
