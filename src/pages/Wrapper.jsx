import React, { useContext } from "react";
import WatchlistContext from "@/context/watchlist-context";
import ToplistContext from "@/context/toplist-context";
import TracklistContext from "@/context/tracklist-context";



import Sidebar from "@/Components/UI/Sidebar";

export default function Wrapper(props) {
 

 

  return (
    <>
      <ToplistContext>
        <WatchlistContext>
          <TracklistContext>
            <Sidebar>{props.children}</Sidebar>
          </TracklistContext>
        </WatchlistContext>
      </ToplistContext>
    </>
  );
}
