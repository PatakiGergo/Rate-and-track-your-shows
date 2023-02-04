import React, { useState, useContext } from "react";

export const TracklistContext = React.createContext({
  tracklistItems: [],
  addMovie: (id) => {},
  remove: (id) => {},

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
        },
      ],
      dataOfUserProgress: {},
    },
  ]);

  function addToTracklist(name, id, episodes, img, dataOfUserProgress) {
    setTracklist((current) => {
      if (current.some((item) => item.title === name)) {
        alert("this is already on your toplist");
        return [...current];
      } else {
        console.log("Current", ...current);
        return [
          ...current,
          { title: name, id, episodes, img, dataOfUserProgress },
        ];
      }
    });
  }

  return (
    <TracklistContext.Provider
      value={{
        tracklistItems: tracklist,
        addMovie: addToTracklist,
      }}
    >
      {props.children}
    </TracklistContext.Provider>
  );
};
