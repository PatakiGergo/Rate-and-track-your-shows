import React, { useContext } from "react";
import { ToplistContext } from "@/context/toplist-context";

export default function ToplistCard(props) {
  const toplistContext = useContext(ToplistContext);
  console.log(props.data);

  function deleteHandler() {
    toplistContext.remove(props.imdbID);
  }

  const overall = Number(props.data.music) + Number(props.data.plot);

  return (
    <div>
      <h1>Overall rating: {overall} </h1>
      <h1>{props.title} </h1>
      <h2>{props.imdbID} </h2>
      <h3>Music {props.data.music} </h3>
      <h3>Plot {props.data.plot} </h3>
      <h3>Characters {props.data.characters} </h3>
      <h3>Acting{props.data.acting} </h3>
      <h3>Overall experience {props.data.overall_experience} </h3>
      <h3>Review {props.data.review} </h3>
      <h3>Disliked {props.data.disliked} </h3>
      <h3>Liked {props.data.liked} </h3>
      <h3>Recommendation {props.data.recommendation} </h3>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
