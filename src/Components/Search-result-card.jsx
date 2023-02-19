import React, { useContext, useState } from "react";

import AddToWatchlistButton from "./Buttons/AddToWatchlist";
import AddToToplistButton from "./Buttons/AddToToplist";
import AddToTracklist from "./Buttons/AddToTracklist";

export default function SearchResultCard(props) {
  const description = props.description;

  const text = () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = description;

    const text = wrapper.textContent;

    return <div>{text}</div>;
  };

  return (
    <>
      <div className="searchcard-container">
        <div className="container-card">
          <img src={props.image} alt={`Image of ${props.name}`} />

          <div>
            <h1>{props.name}</h1>
            <p>{props.genres} </p>
            <div className="description">
              <p>{text()}</p>
            </div>

            <div className="searchcard-button-div">
              <AddToWatchlistButton
                name={props.name}
                imdbID={props.imdbID}
                image={props.image}
                description={props.description}
              ></AddToWatchlistButton>
              <AddToTracklist
                show={props.name}
                name={props.name}
              ></AddToTracklist>
              <AddToToplistButton
                name={props.name}
                id={props.imdbID}
                img={props.image}
              ></AddToToplistButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
