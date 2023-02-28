import React, { useState, useContext, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export const WatchlistContext = React.createContext({
  watchlistItems: [],
  addMovie: (id) => {},
  remove: (id) => {},
});

// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default (props) => {
  const [watchlist, setWatchlist] = useLocalStorageState("watchlistContext", {
    defaultValue: [],
  });

  //adding movies to watchlist with, chenking if it's already there or not
  function addToWatchlist(name, id, image, description) {
    setWatchlist((current) => {
      if (current.some(({ title }) => title === name)) {
        return [...current];
      } else {
        const updatedWatchlist = [
          ...current,
          { title: name, id, image, description },
        ];

        return updatedWatchlist;
      }
    });
  }

  //removing movies from watchlist
  function removeMovie(id) {
    setWatchlist((current) => {
      const updatedWatchlist = current.filter((item) => item.id !== id);

      return updatedWatchlist;
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
