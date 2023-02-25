import React, { useContext } from "react";

import WatchlistCard from "@/Components/Watchlist/WatchListCard";
import { WatchlistContext } from "@/context/watchlist-context";
import Head from "next/head";

export default function Watchlist() {
  const watchlist = useContext(WatchlistContext).watchlistItems;

  const watchListItems = watchlist.map(({ id, title, image, description }) => {
    return (
      <WatchlistCard
        key={id}
        title={title}
        imdbID={id}
        image={image}
        description={description}
      />
    );
  });

  return (
    <>
      <Head>
        <title>Watchlist</title>
      </Head>
      <section>{watchListItems}</section>
    </>
  );
}
