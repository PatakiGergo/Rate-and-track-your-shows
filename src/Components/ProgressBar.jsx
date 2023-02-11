import React, { useState, useContext, useEffect } from "react";
import { TracklistContext } from "@/context/tracklist-context";
import LinearProgress from "@mui/material/LinearProgress";

export default function ProgressBar(props) {
  const tracklistContextArr = useContext(TracklistContext);
  const title = props.title;

  console.log(props.progress);

  return (
    <div>
      {/* <h1>Next episode: </h1> */}

      <h1>Progress: {Math.floor(props.progress * 100)} %</h1>
      <LinearProgress
        color={"secondary"}
        variant="determinate"
        value={Math.floor(props.progress * 100)}
        sx={{
          height: "10px",
          backgroundColor: "white",
          borderRadius: 5,
        }}
      />
    </div>
  );
}
