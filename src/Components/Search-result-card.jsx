import React, { useContext, useState } from "react";
import Image from "next/image";
import { WatchlistContext } from "@/context/watchlist-context";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { ToplistContext } from "@/context/toplist-context";
import Form from "./ToplistForm";

export default function SearchResultCard(props) {
  const watchlistContext = useContext(WatchlistContext);
  const toplistContext = useContext(ToplistContext);
  const [showModal, setShowModal] = useState(false);

  function watchlistHandler() {
    watchlistContext.addMovie(props.name, props.imdbID);
  }

  function handleToplist() {
    if (toplistContext.toplistItems.some((item) => item.title === props.name)) {
      alert("its already on your list");
    } else {
      setShowModal(!showModal);
    }
  }

  function handleClose() {
    setShowModal(!showModal);
  }

  return (
    <>
      <div className="container">
        {showModal && (
          <>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={showModal}
              onClick={handleClose}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <Form
                  name={props.name}
                  imdbID={props.imdbID}
                  handleModal={handleToplist}
                />
              </div>
            </Backdrop>
          </>
        )}
        <img src={props.image} alt={`Image of ${props.name}`} />
        <div>
          <h1>{props.name}</h1>
          <h2>Alt</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            unde velit possimus ullam quo quidem suscipit consectetur in ipsam
            quisquam voluptatibus. Quasi aliquam expedita est optio consectetur
            ut dolor in.
          </h3>
        </div>
        <div>
          <button onClick={watchlistHandler}>Watchlist</button>
          <button>Track</button>
          <button onClick={handleToplist}>Add to toplist</button>
        </div>
      </div>
    </>
  );
}
