import React, { useState, useContext } from "react";

export const WatchlistContext = React.createContext({
  watchlistItems: [],
  addMovie: (id) => {},
  remove: (id) => {},
});

// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default (props) => {
  const [watchlist, setWatchlist] = useState([{ title: "asd", id: 12 }]);

  //adding movies to watchlist with chenking if it's already there or not
  function addToWatchlist(name, id) {
    setWatchlist((current) => {
      if (current.some((item) => item.title === name)) {
        alert("this is already on your list");
        return [...current];
      } else {
        console.log("Current", ...current);
        return [...current, { title: name, id }];
      }
    });
  }

  //removing movies from watchlist
  function removeMovie(id) {
    setWatchlist((current) => {
      return current.filter((item) => item.id !== id);
    });
  }

  console.log(watchlist);

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
