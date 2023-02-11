import React, { useContext, useState } from "react";
import Image from "next/image";
import { WatchlistContext } from "@/context/watchlist-context";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { ToplistContext } from "@/context/toplist-context";
import ToplistForm from "./ToplistForm";
import TracklistForm from "./TracklistForm";

export default function SearchResultCard(props) {
  const watchlistContext = useContext(WatchlistContext);
  const toplistContext = useContext(ToplistContext);
  const [showModal, setShowModal] = useState(false);
  const [showTrackModal, setTrackModal] = useState(false);

  function watchlistHandler() {
    watchlistContext.addMovie(props.name, props.imdbID);
  }

  function handleToplist() {
    if (toplistContext.toplistItems.some((item) => item.title === props.name)) {
      alert("its already on your list");
    } else {
      setShowModal(!showModal);
    }
  }

  function handleClose() {
    setShowModal(!showModal);
  }

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
        {showModal && (
          <>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={showModal}
              onClick={handleClose}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <ToplistForm
                  name={props.name}
                  imdbID={props.imdbID}
                  img={props.image}
                  handleModal={handleToplist}
                />
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
              <p >{props.description}</p>
            </div>

            <div className="searchcard-button-div">
              <button onClick={watchlistHandler}>Watchlist</button>
              <button onClick={handleTrack}>Track</button>
              <button onClick={handleToplist}>Add to toplist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
