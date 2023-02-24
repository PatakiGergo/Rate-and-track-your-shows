import React, { useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import TracklistForm from "../TracklistForm";
import { ToplistContext } from "@/context/toplist-context";
import UserAlert from "../UserAlert";
import { TracklistContext } from "@/context/tracklist-context";

//fromwherepropot csinálni és akkor onnan removeolja

export default function AddToTracklist(props) {
  const tracklistContext = useContext(TracklistContext);
  const toplistContext = useContext(ToplistContext);
  const [showTrackModal, setTrackModal] = useState(false);
  const [added, setAdded] = useState(false);
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
  const [list, setList] = useState("toplist");

  function handleTrack() {
    if (toplistContext.toplistItems.some((item) => item.title === props.name)) {
      /* alert("It's already on your toplist"); */
      setNoSuccess(true);
      setTimeout(() => {
        setNoSuccess(false);
      }, 1500);
    } else if (
      tracklistContext.tracklistItems.some((item) => item.title === props.name)
    ) {
      setList("tracklist");
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

  function successAlert() {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  }

  return (
    <>
      {added && (
        <UserAlert
          type={"success"}
          message={"Succesfully added to tracklist"}
        ></UserAlert>
      )}
      {noSuccess && (
        <UserAlert type={"error"} message={`Already on your ${list}`} />
      )}
      <button onClick={handleTrack}>Add to tracklist</button>
      {showTrackModal && (
        <>
          <TracklistForm
            show={props.name}
            handleModal={handleTrack}
            id={props.id}
            handleSuccess={successAlert}
          />
        </>
      )}
    </>
  );
}
