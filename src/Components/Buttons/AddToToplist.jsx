import React, { useContext, useState, useReducer } from "react";
import { ToplistContext } from "@/context/toplist-context";
import ToplistForm from "../Toplist/ToplistForm";
import { Backdrop } from "@mui/material";
import UserAlert from "../Alerts/UserAlert";
import AreYouSure from "../Alerts/AreYouSure";

export default function AddToToplistButton(props) {
  const toplistContext = useContext(ToplistContext);

  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [noSuccess, setNoSuccess] = useState(false);
  const [sureModal, setSureModal] = useState(false);

  function handleToplist() {
    if (toplistContext.toplistItems.some((item) => item.title === props.name)) {
      setNoSuccess(true);
      setTimeout(() => {
        setNoSuccess(false);
      }, 1500);
    } else if (props.from === "tracklist" && props.progress < 1) {
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
          message={`${props.name} is already on your toplist`}
        ></UserAlert>
      )}
      {success && (
        <UserAlert
          type={"success"}
          message={`${props.name} successfully added to your toplist`}
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
                name={props.name}
                imdbID={props.id}
                img={props.image}
                handleModal={handleToplist}
                id={props.id}
                handleSuccess={handleSuccess}
              />
            </div>
          </Backdrop>
        </>
      )}
      <button className={props.class} onClick={handleToplist}>
        Add to toplist
      </button>
    </>
  );
}
