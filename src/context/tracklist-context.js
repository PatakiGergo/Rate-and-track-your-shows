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
    },
  ]);

  return (
    <TracklistContext.Provider
      value={{
        tracklistItems: tracklist,
      }}
    >
      {props.children}
    </TracklistContext.Provider>
  );
};
