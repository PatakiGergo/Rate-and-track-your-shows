import React, { useState, useContext, useEffect } from "react";

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
      if (current.some(({ title }) => title === name)) {
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

  useEffect(() => {
    const watchlistItem = JSON.parse(localStorage.getItem("watchlist"));
    if (watchlistItems[0]?.title === "asd") {
      setWatchlist(watchlistItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

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
