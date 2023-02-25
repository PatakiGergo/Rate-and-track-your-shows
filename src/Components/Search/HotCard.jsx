/* eslint-disable @next/next/no-img-element */
import React from "react";
import AddToTracklist from "../Buttons/AddToTracklist";
import AddToWatchlistButton from "../Buttons/AddToWatchlist";
import AddToToplistButton from "../Buttons/AddToToplist";

export default function HotCard({ title, image, description, id }) {
  return (
    <div className="hot-card-container">
      <h1>{title} </h1>
      <div className="hot-picture">
        <img src={image} alt={`Image of ${title} `} />
      </div>
      <div className="hot-description">
        <p>{description}</p>
      </div>
      <div className="hot-card-buttons">
        <AddToToplistButton
          name={title}
          id={id}
          image={image}
        ></AddToToplistButton>
        <AddToTracklist name={title}></AddToTracklist>
        <AddToWatchlistButton
          name={title}
          imdbId={id}
          img={image}
          description={description}
        ></AddToWatchlistButton>
      </div>
    </div>
  );
}
