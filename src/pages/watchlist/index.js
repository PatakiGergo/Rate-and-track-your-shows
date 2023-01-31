import React, { useContext } from "react";
import ToplistCard from "@/Components/ToplistCard";
import WatchlistCard from "@/Components/WatchListCard";
import { WatchlistContext } from "@/context/watchlist-context";

export default function Watchlist() {
  const watchlist = useContext(WatchlistContext).watchlistItems;

  console.log(watchlist);

  const watchListItems = watchlist.map((item) => {
    return <WatchlistCard key={item.id} title={item.title} imdbID={item.id} />;
  });

  return <div>{watchListItems}</div>;
}
