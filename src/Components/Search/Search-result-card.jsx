/* eslint-disable @next/next/no-img-element */
import React from "react";

import AddToWatchlistButton from "../Buttons/AddToWatchlist";
import AddToToplistButton from "../Buttons/AddToToplist";
import AddToTracklist from "../Buttons/AddToTracklist";
import IMDBCard from "../UI/IMDBCard";

export default function SearchResultCard({
  description,
  name,
  imdbID,
  image,
  genres,
}) {
  //formatting text
  const text = () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = description;

    const text = wrapper.textContent;

    return <div>{text}</div>;
  };

  return (
    <>
      <div className="searchcard-container">
        <IMDBCard ImdbID={imdbID} title={name}></IMDBCard>
        <div className="container-card">
          <img src={image} alt={`Image of ${name}`} />

          <div>
            <h1>{name}</h1>
            <p>{genres} </p>
            <div className="description">
              <p>{text()}</p>
            </div>

            <div className="searchcard-button-div">
              <AddToWatchlistButton
                name={name}
                imdbID={imdbID}
                image={image}
                description={description}
              ></AddToWatchlistButton>
              <AddToTracklist show={name} name={name}></AddToTracklist>
              <AddToToplistButton
                name={name}
                id={imdbID}
                img={image}
              ></AddToToplistButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
