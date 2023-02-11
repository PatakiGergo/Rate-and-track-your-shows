import React, { useContext, useState } from "react";

import Backdrop from "@mui/material/Backdrop";

import TracklistForm from "./TracklistForm";
import AddToWatchlistButton from "./Buttons/AddToWatchlist";
import AddToToplistButton from "./Buttons/AddToToplist";

export default function SearchResultCard(props) {
  const [showTrackModal, setTrackModal] = useState(false);

  function handleTrack() {
    setTrackModal(!showTrackModal);
  }

  function handleTrackClose() {
    setTrackModal(!showTrackModal);
  }

  return (
    <>
      <div className="searchcard-container">
        {showTrackModal && (
          <>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={showTrackModal}
              onClick={handleTrackClose}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <TracklistForm show={props.name} handleModal={handleTrack} />
              </div>
            </Backdrop>
          </>
        )}

        <div className="container-card">
          <img src={props.image} alt={`Image of ${props.name}`} />

          <div>
            <h1>{props.name}</h1>
            <p>{props.genres} </p>
            <div className="description">
              <p>{props.description}</p>
            </div>

            <div className="searchcard-button-div">
              <AddToWatchlistButton
                name={props.name}
                imdbID={props.imdbID}
              ></AddToWatchlistButton>
              <button onClick={handleTrack}>Track</button>
              <AddToToplistButton name={props.name}></AddToToplistButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
