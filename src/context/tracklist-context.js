import React, { useState, useContext } from "react";

export const TracklistContext = React.createContext({
  tracklistItems: [],
  addMovie: (id) => {},
  remove: (id) => {},

  sortItems: (sortBy) => {},
  calculateProgress: (title) => {},
});

// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default (props) => {
  const [tracklist, setTracklist] = useState([
    {
      title: "asd",
      id: 12,
      img: "asd",
      episodes: [
        {
          season: 0,
          episode: 2,
          seen: false,
        },
      ],
      dataOfUserProgress: 5,
    },
  ]);

  function addToTracklist(name, id, episodes, img, dataOfUserProgress) {
    setTracklist((current) => {
      if (current.some((item) => item.title === name)) {
        alert("this is already on your tracklist");
        return [...current];
      } else {
        episodes.seasonSeen = false;
        return [
          ...current,
          { title: name, id, episodes, img, dataOfUserProgress },
        ];
      }
    });
  }

  //removing movies from tracklist
  function removeMovieFromTracklist(id) {
    setTracklist((current) => {
      return current.filter((item) => item.id !== id);
    });
  }

  /////// NOTE TO SELF_ DO IT WITH NUMBERS ON THE SEASON COMPONENT THEN CALCULATE IN PROGRESS WITH ALL SEASON ELEMENTS INSTEAD OF THIS:
  function calculateProgress(name) {
    let seenEpisodes = 0;
    tracklist.map((series) => {
      if (series.title === name) {
        series.episodes.map((episode) => {
          if (episode.seen) {
            seenEpisodes++;
          }
        });
      }
    });
    return seenEpisodes;
  }

  return (
    <TracklistContext.Provider
      value={{
        tracklistItems: tracklist,
        addMovie: addToTracklist,
        remove: removeMovieFromTracklist,
        calculateProgress: calculateProgress,
      }}
    >
      {props.children}
    </TracklistContext.Provider>
  );
};
