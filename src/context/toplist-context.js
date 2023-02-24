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
      title: "Add your first movie",
      id: 12,
      image:
        "https://images.unsplash.com/photo-1627873959341-905d35362273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      review: {
        plot: "10",
        characters: "10",
        music: "11",
        acting: "55",
        overall_experience: "444",
        liked: "Or liked",
        review: "Here will be your review",
        disliked: "You can also see what you have disliked",
        recommendation: "No",
        overall_user_score: "Here, you will see your overall rating in ",
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
        return [...current];
      } else {
        return [...current, { title: name, id, image: img, review }];
      }
    });
  }

  //removing movies from toplist
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
