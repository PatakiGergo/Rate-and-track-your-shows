import React, { useState, useContext, useEffect } from "react";
import { TracklistContext } from "@/context/tracklist-context";
import LinearProgress from "@mui/material/LinearProgress";

export default function ProgressBar(props) {
  return (
    <div className="bar">
    

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
