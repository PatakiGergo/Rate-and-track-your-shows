import React from "react";

export default function SeasonAndEpisode(props) {
  return (
    <div>
      <h1>Title: {props.name} </h1>
      <h2>
        Season: {props.season} Episode: {props.episode}{" "}
      </h2>
      <p>Seen?</p>
      <input type="checkbox" />
    </div>
  );
}
