import React, { useContext, useEffect, useState } from "react";
import { TracklistContext } from "@/context/tracklist-context";
import { WatchlistContext } from "@/context/watchlist-context";

export default function TracklistForm(props) {
  const watchlistContext = useContext(WatchlistContext);
  const tracklist = useContext(TracklistContext);
  const [show, setShow] = useState("wednesday");
  const [episodeData, setEpisodeData] = useState({
    name: "name placeholder",
    image: "image.medium",
    externals: {
      imdb: "code starts with tt",
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
        .then((data) => {
          tracklist.addMovie(
            data.name,
            data.externals.imdb,
            data._embedded.episodes,
            data.image.medium
          );
          watchlistContext.remove(
            episodeData.externals.imdb
              ? episodeData.externals.imdb
              : episodeData.id
          );
          props.handleSuccess();
        })
        .catch()
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return <></>;
}
