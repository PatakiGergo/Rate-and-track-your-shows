import React, { useContext, useState } from "react";
import { ToplistContext } from "@/context/toplist-context";
import ToplistForm from "../ToplistForm";
import { Backdrop } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function AddToToplistButton(props) {
  const toplistContext = useContext(ToplistContext);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleToplist() {
    if (toplistContext.toplistItems.some((item) => item.title === props.name)) {
      alert("its already on your list");
    } else {
      setSuccess(!success);
      setShowModal(!showModal);
    }
  }

  function handleClose() {
    setShowModal(!showModal);
  }

  return (
    <>
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
                imdbID={props.imdbID}
                img={props.image}
                handleModal={handleToplist}
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
