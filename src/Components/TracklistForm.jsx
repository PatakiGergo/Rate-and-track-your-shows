//it needs to make a request using the tvmaze show api and it needs to be scrollable

//which episode you currently at?
//leave an option of did not start

import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TracklistContext } from "@/context/tracklist-context";
import SeasonAndEpisode from "./SeasonAndEpisode";

export default function TracklistForm(props) {
  const [show, setShow] = useState("wednesday");
  const [episodeData, setEpisodeData] = useState({
    name: "asd",
    image: "image.medium",
    _embedded: {
      episodes: [{ name: "Pilot", season: 3, number: 1 }],
    },
  });

  const episodes = episodeData._embedded.episodes.map((episode) => {
    return (
      <>
        <SeasonAndEpisode
          name={episode.name}
          season={episode.season}
          episode={episode.number}
        ></SeasonAndEpisode>
      </>
    );
  });

  useEffect(() => {
    fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${props.show}&embed=episodes`
    ).then((res) =>
      res
        .json()
        .then((data) => setEpisodeData(data))
        .catch((err) => console.log(err))
    );
  }, [show]);

  console.log(episodeData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("ez a data", data);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>{episodeData.name} </h1>
        <label htmlFor="">Plot</label>
        <input
          type="range"
          placeholder="Plot"
          {...register("plot", { required: true, max: 100, min: 1 })}
        />
        {episodes}
        <input type="submit" />
      </form>
    </>
  );
}
