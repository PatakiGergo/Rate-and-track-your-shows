import React, { useState } from "react";
import { Backdrop } from "@mui/material";

const MoreInfo = (props) => {
  const [showModal, setShowModal] = useState(false);

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
                <h1>Your detailed overview of {props.title} </h1>
                <h1>You ratings in %</h1>

                <h3>Plot {props.data.plot} %</h3>
                <h3>Plot {props.data.plot} %</h3>
                <h3>Characters {props.data.characters} %</h3>
                <h3>Acting{props.data.acting} %</h3>
                <h3>Overall experience {props.data.overall_experience} %</h3>

                <h1>Your written overview: </h1>
                <h3>Review {props.data.review} </h3>
                <h3>Disliked {props.data.disliked} </h3>
                <h3>Liked {props.data.liked} </h3>

                <h1>Would you recommend it?</h1>
                <h3>Recommendation {props.data.recommendation} </h3>
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
