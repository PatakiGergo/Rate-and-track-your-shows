import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TracklistContext } from "@/context/tracklist-context";
import Alert from "@mui/material/Alert";
import { WatchlistContext } from "@/context/watchlist-context";
import OngoingCard from "./OngoingCard";

export default function TracklistForm(props) {
  const watchlistContext = useContext(WatchlistContext);
  const tracklist = useContext(TracklistContext);
  const [show, setShow] = useState("wednesday");
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

  useEffect(() => {
    fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${props.show}&embed=episodes`
    ).then((res) =>
      res
        .json()
        .then((data) => setEpisodeData(data))
        .catch()
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //a data a user progress
    tracklist.addMovie(
      episodeData.name,
      episodeData.externals.imdb,
      episodeData._embedded.episodes,
      episodeData.image.medium
    );
    props.handleModal();
    
    watchlistContext.remove(
      episodeData.externals.imdb ? episodeData.externals.imdb : episodeData.id
    );
  };

  handleSubmit(onSubmit);

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Are you sure?</h1>
        <button type="submit">Yes</button>
      </form>
    </>
  );
}
