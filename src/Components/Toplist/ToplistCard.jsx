/* eslint-disable @next/next/no-img-element */
import React from "react";
import RemoveButton from "../Buttons/RemoveButton";
import MoreInfo from "./MoreInfo";
import IMDBCard from "../UI/IMDBCard";

export default function ToplistCard({ title, data, id, imdbId, img }) {
  const { overall_user_score, review, recommendation } = data;

  return (
    <section className="toplist-card">
      <div className="toplist-image-container">
        <img className="toplist-image" src={img} alt="" />
      </div>
      <div>
        <IMDBCard title={title} ImdbID={imdbId}></IMDBCard>
        <h1>{title} </h1>
        <h1>Overall rating: {overall_user_score}% </h1>
        <h3>Review {review} </h3>

        {/* <h3>Recommendation {recommendation} </h3> */}
      </div>
      <div className="buttondiv">
        <MoreInfo show={title} data={data} />
        <RemoveButton type={"toplist-delete"} id={id} />
      </div>
    </section>
  );
}
