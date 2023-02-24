import React from "react";

const IMDBCard = (props) => {
  return (
    <>
      <a href={`https://www.imdb.com/title/${props.ImdbID}/`}>
        <img
          className="toplist-info"
          src="https://logos-world.net/wp-content/uploads/2022/04/IMDb-Emblem.png"
          alt={`IMDB logo for ${props.title}`}
          width={200}
        />
      </a>
    </>
  );
};

export default IMDBCard;
