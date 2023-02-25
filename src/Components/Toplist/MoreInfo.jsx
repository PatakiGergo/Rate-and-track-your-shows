import React, { useState } from "react";
import { Backdrop } from "@mui/material";

const MoreInfo = ({ data, title }) => {
  const [showModal, setShowModal] = useState(false);
  const {
    plot,
    characters,
    acting,
    overall_experience,
    review,
    disliked,
    liked,
    recommendation,
  } = data;

  function handleClick() {
    setShowModal((prev) => !prev);
  }

  return (
    <>
      {showModal && (
        <>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showModal}
            onClick={handleClick}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <div className="form">
                <h1>Your detailed overview of {title} </h1>
                <h1>You ratings in %</h1>

                <h3>Plot {plot} %</h3>
                <h3>Characters {characters} %</h3>
                <h3>Acting{acting} %</h3>
                <h3>Overall experience {overall_experience} %</h3>

                <h1>Your written overview: </h1>
                <h3>Review {review} </h3>
                <h3>Disliked {disliked} </h3>
                <h3>Liked {liked} </h3>

                <h1>Would you recommend it?</h1>
                <h3>Recommendation {recommendation} </h3>
              </div>
            </div>
          </Backdrop>
        </>
      )}
      <button onClick={handleClick}>Details</button>
    </>
  );
};

export default MoreInfo;
