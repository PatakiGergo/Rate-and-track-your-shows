import React from "react";
import AddToTracklist from "../Buttons/AddToTracklist";
import AddToWatchlistButton from "../Buttons/AddToWatchlist";
import AddToToplistButton from "../Buttons/AddToToplist";

export default function HotCard(props) {
  return (
    <div className="hot-card-container">
      <h1>{props.title} </h1>
      <div className="hot-picture">
        <img src={props.image} alt={`Image of ${props.title} `} />
      </div>
      <div className="hot-description">
        <p>{props.description}</p>
      </div>
      <div className="hot-card-buttons">
        <AddToToplistButton
          name={props.title}
          id={props.id}
          image={props.image}
        ></AddToToplistButton>
        <AddToTracklist name={props.title}></AddToTracklist>
        <AddToWatchlistButton
          name={props.title}
          imdbId={props.id}
          img={props.image}
          description={props.description}
        ></AddToWatchlistButton>
      </div>
    </div>
  );
}
