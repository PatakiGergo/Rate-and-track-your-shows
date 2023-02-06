import React, { useState, useContext, useEffect } from "react";
import { TracklistContext } from "@/context/tracklist-context";

export default function ProgressBar(props) {
  const tracklistContextArr = useContext(TracklistContext);
  const title = props.title;

  console.log(props.progress);

  return (
    <div>
      <h1>Next episode: </h1>
      <h1>Progress: {props.progress} %</h1>
    </div>
  );
}
