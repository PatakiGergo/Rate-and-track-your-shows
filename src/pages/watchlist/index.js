import React, { useContext } from "react";
import ToplistCard from "@/Components/ToplistCard";
import WatchlistCard from "@/Components/WatchListCard";
import { WatchlistContext } from "@/context/watchlist-context";

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

  return <div>{watchListItems}</div>;
}
