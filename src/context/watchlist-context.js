import React, { useState, useContext } from "react";

export const WatchlistContext = React.createContext({
  watchlistItems: [],
  addMovie: (id) => {},
  remove: (id) => {},
});

// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default (props) => {
  const [watchlist, setWatchlist] = useState([{ title: "asd", id: 12 }]);

  //adding movies to watchlist with, chenking if it's already there or not
  function addToWatchlist(name, id, image, description) {
    setWatchlist((current) => {
      if (current.some((item) => item.title === name)) {
        return [...current];
      } else {
        return [...current, { title: name, id, image, description }];
      }
    });
  }

  //removing movies from watchlist
  function removeMovie(id) {
    setWatchlist((current) => {
      return current.filter((item) => item.id !== id);
    });
  }

  return (
    <WatchlistContext.Provider
      value={{
        watchlistItems: watchlist,
        addMovie: addToWatchlist,
        remove: removeMovie,
      }}
    >
      {props.children}
    </WatchlistContext.Provider>
  );
};
