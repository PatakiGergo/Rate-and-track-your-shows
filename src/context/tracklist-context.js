import React, { useState } from "react";

export const TracklistContext = React.createContext({
  tracklistItems: [],
  seenEpisodes: [],
  addMovie: (id) => {},
  remove: (id) => {},
  handleSeen: (id, title) => {},
  sortItems: (sortBy) => {},
  calculateProgress: (title) => {},
  handleSeenSeason: () => {},
  handleSeasonUndo: () => {},
});

//Items on the tracklist
// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default (props) => {
  const [tracklist, setTracklist] = useState([
    {
      title: "asd",
      id: 12,
      img: "asd",
      seasonsSeen: [],
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

  //Seen Episodes stored in objects
  const [seenEpisodes, setSeenEpisodes] = useState([
    {
      id: "idexample",
      url: "example",
      name: "placeholder",
      season: 4,
      number: 5,
    },
  ]);

  //Adding to tracklist with checking if it's already there or not
  function addToTracklist(name, id, episodes, img, dataOfUserProgress) {
    const showObject = {
      title: name,
      id,
      episodes,
      img,
      dataOfUserProgress,
      seasonsSeen: [],
    };
    setTracklist((current) => {
      if (current.some(({ title }) => title === name)) {
        return [...current];
      } else {
        episodes.seasonSeen = false;
        return [...current, showObject];
      }
    });
  }

  //removing movies from tracklist
  function removeMovieFromTracklist(id) {
    setTracklist((current) => {
      return current.filter((item) => item.id !== id);
    });
  }

  //finding the show ticked by the user
  function findShow(store, titleOfShow) {
    const showObject = store.find(({ title }) => title === titleOfShow);
    return showObject;
  }

  //finding the episode of the show ticked by the user
  function findEpisodeOfShow(show, titleOfEpisode) {
    const episodeObject = show.episodes.find(
      ({ name }) => name === titleOfEpisode
    );
    return episodeObject;
  }

  //Adding it to the state
  function addToSeenEpisodes(episode) {
    if (seenEpisodes.includes(episode)) {
      setSeenEpisodes((seenEpisodes) => {
        return seenEpisodes.filter((item) => item.name !== episode.name);
      });
    } else {
      setSeenEpisodes((seenEpisodes) => [...seenEpisodes, episode]);
    }
  }

  //Handling episode seen by the user
  function handleSeen(id, episodeTitle, showTitle) {
    setTracklist((currentTracklist) => {
      const show = findShow(currentTracklist, showTitle);
      const episode = findEpisodeOfShow(show, episodeTitle);
      addToSeenEpisodes(episode);
      return currentTracklist;
    });
  }

  //Handling season tick
  function handleSeenSeason(id, episodeTitle, showTitle, season) {
    setTracklist((current) => {
      const show = findShow(current, showTitle);
      show.seasonsSeen.push(season);
      show.episodes.forEach((episode) => {
        if (episode.name === episodeTitle) {
          episode.showTitle = showTitle;

          setSeenEpisodes((prev) => [...prev, episode]);
        }
      });
      return current;
    });
  }

  function filtering(object, ownProp, condition) {
    const filteredArray = object[ownProp].filter((item) => item !== condition);
    return filteredArray;
  }

  //handling if it's already ticked
  function handleSeasonUndo(id, episodeTitle, showTitle, season) {
    setTracklist((current) => {
      const show = findShow(current, showTitle);
      show.seasonsSeen = filtering(show, "seasonsSeen", season);
      show.episodes.forEach((episode) => {
        if (episode.name === episodeTitle && episode.showTitle === showTitle) {
          episode.seasonSeen = false;
          setSeenEpisodes((prev) => prev.filter((item) => item !== episode));
        }
      });
      return current;
    });
  }

  //calculating user progression
  function calculateProgress(title) {
    let seenEpisodes = 0;
    const show = findShow(tracklist, title);
    show.episodes.forEach((episode) => {
      if (episode.seen) {
        seenEpisodes++;
      }
    });
    return seenEpisodes;
  }

  return (
    <TracklistContext.Provider
      value={{
        tracklistItems: tracklist,
        seenEpisodes: seenEpisodes,
        addMovie: addToTracklist,
        remove: removeMovieFromTracklist,
        calculateProgress: calculateProgress,
        handleSeen: handleSeen,
        handleSeenSeason: handleSeenSeason,
        handleSeasonUndo: handleSeasonUndo,
      }}
    >
      {props.children}
    </TracklistContext.Provider>
  );
};
