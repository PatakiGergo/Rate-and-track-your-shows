

import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TracklistContext } from "@/context/tracklist-context";


export default function TracklistForm(props) {
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
        .catch((err) => console.log(err))
    );
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
      episodeData._embedded.episodes
    );
    props.handleModal();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="submit" />
      </form>
    </>
  );
}
