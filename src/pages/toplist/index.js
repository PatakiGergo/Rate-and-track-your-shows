import React, { useContext } from "react";
import ToplistCard from "@/Components/ToplistCard";
import { ToplistContext } from "@/context/toplist-context";
import Sorting from "@/Components/Sorting";

export default function Toplist() {
  const toplist = useContext(ToplistContext).toplistItems;

  console.log(toplist);

  const toplistItemsArr = toplist.map((item) => {
    return (
      <>
        <ToplistCard
          key={item.id}
          title={item.title}
          imdbID={item.id}
          data={item.review}
        />
      </>
    );
  });

  return (
    <div>
      <Sorting items={toplistItemsArr}></Sorting>
      {toplistItemsArr}
    </div>
  );
}
