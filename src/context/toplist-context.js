import React, { useState, useContext } from "react";

export const ToplistContext = React.createContext({
  toplistItems: [],
  addMovie: (id) => {},
  remove: (id) => {},

  sortItems: (sortBy) => {},
});

// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default (props) => {
  const [toplist, setToplist] = useState([
    {
      title: "asd",
      id: 12,
      image: "no",
      review: {
        plot: "10",
        characters: "10",
        music: "11",
        acting: "55",
        overall_experience: "444",
        liked: "yeeee",
        review: "It's alriight",
        disliked: "prrrr",
        recommendation: "No",
        overall_user_score: 0,
      },
    },
  ]);

  function sortItems(sortingType) {
    
    switch (sortingType) {
      case "lowToHigh":
        
        setToplist((current) => {
          const sortedArr = [...current].sort(
            (a, b) =>
              Number(a.review.overall_user_score) -
              Number(b.review.overall_user_score)
          );
          return sortedArr;
        });
        break;
      case "highToLow":
       
        setToplist((current) => {
          const sortedArr = [...current].sort(
            (a, b) =>
              Number(b.review.overall_user_score) -
              Number(a.review.overall_user_score)
          );
          return sortedArr;
        });
        break;
    }
  }

  //adding movies to watchlist with chenking if it's already there or not
  function addToToplist(name, id, img, review) {
    setToplist((current) => {
      if (current.some((item) => item.title === name)) {
        alert("this is already on your toplist");
        return [...current];
      } else {
     
        return [...current, { title: name, id, img, review }];
      }
    });
  }

  //removing movies from watchlist
  function removeMovie(id) {
    setToplist((current) => {
      return current.filter((item) => item.id !== id);
    });
  }

  return (
    <ToplistContext.Provider
      value={{
        toplistItems: toplist,
        addMovie: addToToplist,
        remove: removeMovie,
        sortItems,
      }}
    >
      {props.children}
    </ToplistContext.Provider>
  );
};
