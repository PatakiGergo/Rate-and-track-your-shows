import React, { useContext, useState, useReducer } from "react";
import { ToplistContext } from "@/context/toplist-context";
import ToplistForm from "../Toplist/ToplistForm";
import { Backdrop } from "@mui/material";
import UserAlert from "../Alerts/UserAlert";
import AreYouSure from "../Alerts/AreYouSure";

export default function AddToToplistButton({ name, id, progress, from, img }) {
  const toplistContext = useContext(ToplistContext);

  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [noSuccess, setNoSuccess] = useState(false);
  const [sureModal, setSureModal] = useState(false);

  function delay(timeInMs) {
    setNoSuccess(true);
    setTimeout(() => {
      setNoSuccess(false);
    }, timeInMs);
  }

  function handleToplist() {
    if (toplistContext.toplistItems.some((item) => item.title === name)) {
      delay(1500);
    } else if (from === "tracklist" && progress < 1) {
      setSureModal(!sureModal);
      return;
    } else {
      setShowModal(!showModal);
    }
  }

  function handleClose() {
    handleNo();
    setShowModal(!showModal);
  }

  function handleSuccess() {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1500);
  }

  function handleYes() {
    setShowModal(!showModal);
  }

  function handleNo() {
    setSureModal(false);
  }

  return (
    <>
      {noSuccess && (
        <UserAlert
          type={"error"}
          message={`${name} is already on your toplist`}
        ></UserAlert>
      )}
      {success && (
        <UserAlert
          type={"success"}
          message={`${name} successfully added to your toplist`}
        ></UserAlert>
      )}
      {sureModal && (
        <AreYouSure
          question={
            "You didnt finish, are you sure you want to add it to your toplist?"
          }
          yesHandler={handleYes}
          noHandler={handleNo}
          open={sureModal}
        />
      )}
      {showModal && (
        <>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showModal}
            onClick={handleClose}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <ToplistForm
                name={name}
                imdbID={id}
                img={img}
                handleModal={handleToplist}
                id={id}
                handleSuccess={handleSuccess}
              />
            </div>
          </Backdrop>
        </>
      )}
      <button onClick={handleToplist}>Add to toplist</button>
    </>
  );
}
