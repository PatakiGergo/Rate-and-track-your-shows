import React, { useContext } from "react";
import { TracklistContext } from "@/context/tracklist-context";
import OngoingCard from "@/Components/Tracking/OngoingCard";
import Head from "next/head";

export default function Tracklist() {
  const tracklist = useContext(TracklistContext).tracklistItems;
  const seenEpisodes = useContext(TracklistContext).seenEpisodes;

 

  const tracklistItems = tracklist.map(
    ({ title, id, episodes, img, seasonsSeen }) => {
      return (
        <OngoingCard
          title={title}
          imdbID={id}
          key={id}
          episodes={episodes}
          img={img}
          seasonsSeen={seasonsSeen}
          seenEpisodes={seenEpisodes}
        />
      );
    }
  );

  return (
    <>
      <Head>
        <title>Tracklist</title>
      </Head>
      <section className="tracklist-container">{tracklistItems}</section>;
    </>
  );
}
