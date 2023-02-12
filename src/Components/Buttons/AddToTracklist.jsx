import React, { useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import TracklistForm from "../TracklistForm";
import { ToplistContext } from "@/context/toplist-context";
import { WatchlistContext } from "@/context/watchlist-context";
import { Alert } from "@mui/material";

//fromwherepropot csinálni és akkor onnan removeolja

export default function AddToTracklist(props) {
  const toplistContext = useContext(ToplistContext);
  const [showTrackModal, setTrackModal] = useState(false);
  const [episodeData, setEpisodeData] = useState({
    name: "asd",
    image: "image.medium",
    externals: {
      imdb: "ttakarmi",
    },
    _embedded: {
      episodes: [{ name: "Pilot", season: 3, number: 1 }],
    },
  });

  //succes alert
  const [success, setSuccess] = useState(false);
  const [noSuccess, setNoSuccess] = useState(false);

  function handleTrack() {
    if (toplistContext.toplistItems.some((item) => item.title === props.name)) {
      /* alert("It's already on your toplist"); */
      setNoSuccess(true);
      setTimeout(() => {
        setNoSuccess(false);
      }, 1500);
    } else {
      setTrackModal(!showTrackModal);
    }
  }

  function handleTrackClose() {
    setTrackModal(!showTrackModal);
  }

  return (
    <>
      {noSuccess && (
        <Alert
          variant="filled"
          severity="error"
          sx={{
            position: "fixed",
            top: "15px",
            right: "850px",

            zIndex: "9999",
            margin: "0 auto",
          }}
        >
          This item is already on your toplist
        </Alert>
      )}
      <button onClick={handleTrack}>Add to tracklist</button>
      {showTrackModal && (
        <>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showTrackModal}
            onClick={handleTrackClose}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <TracklistForm
                show={props.name}
                handleModal={handleTrack}
                id={props.id}
              />
            </div>
          </Backdrop>
        </>
      )}
    </>
  );
}
