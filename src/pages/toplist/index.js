import React, { useContext } from "react";
import ToplistCard from "@/Components/Toplist/ToplistCard";
import { ToplistContext } from "@/context/toplist-context";
import Sorting from "@/Components/Toplist/Sorting";
import Head from "next/head";

export default function Toplist() {
  const toplist = useContext(ToplistContext).toplistItems;

  const toplistItemsArr = toplist.map(({ id, title, review, img }) => {
    return (
      <>
        <ToplistCard
          key={id}
          title={title}
          imdbID={id}
          data={review}
          img={img}
          id={id}
        />
      </>
    );
  });

  return (
    <>
      <Head>
        <title>Toplist</title>
      </Head>

      <section className="toplist-item-container">
        <div className="toplist-header">
          <h1>Your current toplist:</h1>
          <Sorting items={toplistItemsArr} />
        </div>
        <div className="toplist-items">{toplistItemsArr}</div>
      </section>
    </>
  );
}
