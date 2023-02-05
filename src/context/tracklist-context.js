import React, { useState, useContext } from "react";

export const TracklistContext = React.createContext({
  tracklistItems: [],
  addMovie: (id) => {},
  remove: (id) => {},
  handleProgress: (id) => {},

  sortItems: (sortBy) => {},
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
      dataOfUserProgress: {},
    },
  ]);

  function addToTracklist(name, id, episodes, img) {
    setTracklist((current) => {
      if (current.some((item) => item.title === name)) {
        alert("this is already on your tracklist");
        return [...current];
      } else {
        console.log("Current", ...current);
        episodes.seasonSeen = false;
        return [...current, { title: name, id, episodes, img }];
      }
    });
  }

  //removing movies from tracklist
  function removeMovieFromTracklist(id) {
    setTracklist((current) => {
      return current.filter((item) => item.id !== id);
    });
  }

  return (
    <TracklistContext.Provider
      value={{
        tracklistItems: tracklist,
        addMovie: addToTracklist,
        remove: removeMovieFromTracklist,
      }}
    >
      {props.children}
    </TracklistContext.Provider>
  );
};
