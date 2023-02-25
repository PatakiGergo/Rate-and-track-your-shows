import React, { useContext, useState } from "react";
import TracklistForm from "../Tracking/TracklistData";
import { ToplistContext } from "@/context/toplist-context";
import UserAlert from "../Alerts/UserAlert";
import { TracklistContext } from "@/context/tracklist-context";

export default function AddToTracklist({ name, id }) {
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

  function delay(timeInMs) {
    setNoSuccess(true);
    setTimeout(() => {
      setNoSuccess(false);
    }, timeInMs);
  }

  function handleTrack() {
    if (toplistContext.toplistItems.some((item) => item.title === name)) {
      /* alert("It's already on your toplist"); */
      delay(1500);
    } else if (
      tracklistContext.tracklistItems.some((item) => item.title === name)
    ) {
      setList("tracklist");
      delay(1500);
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
            show={name}
            handleModal={handleTrack}
            id={id}
            handleSuccess={successAlert}
          />
        </>
      )}
    </>
  );
}
