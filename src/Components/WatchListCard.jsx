import React, { useContext, useState } from "react";
import { WatchlistContext } from "@/context/watchlist-context";
import RemoveButton from "./Buttons/RemoveButton";
import AddToToplistButton from "./Buttons/AddToToplist";
import AddToTracklist from "./Buttons/AddToTracklist";

export default function WatchlistCard(props) {
  const id = props.imdbID;

  return (
    <>
      <div className="searchcard-container">
        <div className="container-card">
          <img src={props.image} alt={`Image of ${props.title}`} />

          <div>
            <h1>{props.title} </h1>
            {/* <h2>{props.imdbID} </h2> */}

            <p className="description">{props.description} </p>

            <div className="searchcard-button-div">
              <RemoveButton type={"watchlist-delete"} id={id} />
              <AddToToplistButton name={props.title}></AddToToplistButton>
              <AddToTracklist
                show={props.title}
                name={props.title}
              ></AddToTracklist>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
