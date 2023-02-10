import React, { useState, useContext, useMemo } from "react";

export const TracklistContext = React.createContext({
  tracklistItems: [],
  seenEpisodes: [],
  addMovie: (id) => {},
  remove: (id) => {},
  handleSeen: (id, title) => {},
  sortItems: (sortBy) => {},
  calculateProgress: (title) => {},
  handleSeenSeason: () => {},
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
      dataOfUserProgress: 5,
    },
  ]);

  const [seenEpisodes, setSeenEpisodes] = useState([
    { id: "asd", url: "kek", name: "aaa", season: 4, number: 5 },
  ]);

  function addToTracklist(name, id, episodes, img, dataOfUserProgress) {
    setTracklist((current) => {
      if (current.some((item) => item.title === name)) {
        alert("this is already on your tracklist");
        return [...current];
      } else {
        episodes.seasonSeen = false;
        return [
          ...current,
          { title: name, id, episodes, img, dataOfUserProgress },
        ];
      }
    });
  }

  //removing movies from tracklist
  function removeMovieFromTracklist(id) {
    setTracklist((current) => {
      return current.filter((item) => item.id !== id);
    });
  }

  const handleSeen = useMemo(() => {
    return function handleSeen(id, episodeTitle, showTitle) {
      setTracklist((current) => {
        current.map((show) => {
          if (show.title === showTitle) {
            show.episodes.map((episode) => {
              if (episode.name === episodeTitle) {
                if (seenEpisodes.includes(episode)) {
                  setSeenEpisodes((prev) => {
                    return prev.filter((item) => item.name !== episode.name);
                  });
                } else {
                  setSeenEpisodes((prev) => [...prev, episode]);
                }
              }
            });
          }
        });
        return current;
      });
    };
  }, [seenEpisodes, setSeenEpisodes, setTracklist]);

  const handleSeenSeason = useMemo(() => {
    return function handleSeenSeason(id, episodeTitle, showTitle) {
      setTracklist((current) => {
        current.map((show) => {
          if (show.title === showTitle) {
            show.episodes.map((episode) => {
              if (episode.name === episodeTitle) {
                setSeenEpisodes((prev) => [...prev, episode]);
              }
            });
          }
        });
        return current;
      });
    };
  }, [setSeenEpisodes, setTracklist]);

  /////// NOTE TO SELF_ DO IT WITH NUMBERS ON THE SEASON COMPONENT THEN CALCULATE IN PROGRESS WITH ALL SEASON ELEMENTS INSTEAD OF THIS:
  function calculateProgress(name) {
    let seenEpisodes = 0;
    tracklist.map((series) => {
      if (series.title === name) {
        series.episodes.map((episode) => {
          if (episode.seen) {
            seenEpisodes++;
          }
        });
      }
    });
    return seenEpisodes;
  }

  console.log(seenEpisodes);

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
      }}
    >
      {props.children}
    </TracklistContext.Provider>
  );
};
