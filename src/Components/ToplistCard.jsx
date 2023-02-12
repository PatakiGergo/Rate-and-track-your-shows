import React, { useContext } from "react";

import RemoveButton from "./Buttons/RemoveButton";

export default function ToplistCard(props) {
  const imdbId = props.imdbID;
 

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

        {/*   <h2>{props.imdbID} </h2> */}

        {/*  <h3>Music {props.data.music} </h3>
        <h3>Plot {props.data.plot} </h3>
        <h3>Characters {props.data.characters} </h3>
        <h3>Acting{props.data.acting} </h3>
        <h3>Overall experience {props.data.overall_experience} </h3> */}
        <h3>Review {props.data.review} </h3>
        <h3>Disliked {props.data.disliked} </h3>
        <h3>Liked {props.data.liked} </h3>

        {/* <h3>Recommendation {props.data.recommendation} </h3> */}
      </div>
      <RemoveButton type={"toplist-delete"} id={props.id} />
    </div>
  );
}
