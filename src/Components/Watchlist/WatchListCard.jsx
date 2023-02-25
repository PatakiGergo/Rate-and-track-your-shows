/* eslint-disable @next/next/no-img-element */
import React from "react";
import RemoveButton from "../Buttons/RemoveButton";
import AddToToplistButton from "../Buttons/AddToToplist";
import AddToTracklist from "../Buttons/AddToTracklist";

export default function WatchlistCard({ title, imdbID, image, description }) {
  return (
    <>
      <section className="searchcard-container">
        <div className="container-card">
          <img src={image} alt={`Image of ${title}`} />

          <div>
            <h1>{title} </h1>
            {/* <h2>{props.imdbID} </h2> */}

            <p className="description">{description} </p>

            <div className="searchcard-button-div">
              <RemoveButton type={"watchlist-delete"} id={imdbID} />
              <AddToToplistButton name={title}></AddToToplistButton>
              <AddToTracklist show={title} name={title}></AddToTracklist>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
