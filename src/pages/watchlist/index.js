import React, { useContext } from "react";

import WatchlistCard from "@/Components/WatchListCard";
import { WatchlistContext } from "@/context/watchlist-context";
import Head from "next/head";

export default function Watchlist() {
  const watchlist = useContext(WatchlistContext).watchlistItems;

  const watchListItems = watchlist.map((item) => {
    return (
      <WatchlistCard
        key={item.id}
        title={item.title}
        imdbID={item.id}
        image={item.image}
        description={item.description}
      />
    );
  });

  return (
    <html>
      <Head>
        <title>Watchlist</title>
      </Head>
      <body>
        <div>{watchListItems}</div>
      </body>
    </html>
  );
}
