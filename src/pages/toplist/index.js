import React, { useContext } from "react";
import ToplistCard from "@/Components/ToplistCard";
import { ToplistContext } from "@/context/toplist-context";
import Sorting from "@/Components/Sorting";

export default function Toplist() {
  const toplist = useContext(ToplistContext).toplistItems;

  const toplistItemsArr = toplist.map((item) => {
    return (
      <>
        <ToplistCard
          key={item.id}
          title={item.title}
          imdbID={item.id}
          data={item.review}
          img={item.img}
        />
      </>
    );
  });

  return (
    <div className="toplist-item-container">
      <div className="toplist-header">
        <h1>Your current toplist:</h1>
        <Sorting items={toplistItemsArr}></Sorting>
      </div>
      <div className="toplist-items">{toplistItemsArr}</div>
    </div>
  );
}
