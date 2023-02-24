import React, { useContext } from "react";

import RemoveButton from "./Buttons/RemoveButton";
import MoreInfo from "./Buttons/MoreInfo";

export default function ToplistCard(props) {
  const imdbId = props.imdbID;
  console.log("toplist props", props);

  return (
    <div className="toplist-card">
      <div className="toplist-image-container">
        <img className="toplist-image" src={props.img} alt="" />
      </div>
      <div>
        <a
          href={`https://www.imdb.com/title/${props.imdbID}/`}
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="toplist-info"
            src="https://logos-world.net/wp-content/uploads/2022/04/IMDb-Emblem.png"
            alt=""
          />
        </a>
        <h1>{props.title} </h1>
        <h1>Overall rating: {props.data.overall_user_score}% </h1>

        <h3>Review {props.data.review} </h3>

        {/* <h3>Recommendation {props.data.recommendation} </h3> */}
      </div>
      <div className="buttondiv">
        <MoreInfo show={props.title} data={props.data} />
        <RemoveButton type={"toplist-delete"} id={props.id} />
      </div>
    </div>
  );
}
