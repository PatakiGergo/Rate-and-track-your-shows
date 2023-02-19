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
              <h1>{props.show} </h1>
            </div>
          </Backdrop>
        </>
      )}
      <button onClick={handleClick}>Details</button>
    </>
  );
};

export default MoreInfo;
