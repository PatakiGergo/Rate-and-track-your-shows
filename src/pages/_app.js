import "@/styles/globals.css";
import Sidebar from "@/Components/Sidebar";
import "@/styles/layout.css";
import "@/styles/searchcard.css";
import "@/styles/searchbar.css";
import "@/styles/search-main.css";
import "@/styles/form.css";
import "@/styles/toplist-card.css";
import "@/styles/hot-card.css";
import WatchlistContext from "@/context/watchlist-context";
import ToplistContext from "@/context/toplist-context";
import TracklistContext from "@/context/tracklist-context";

export default function App({ Component, pageProps }) {
  return (
    <ToplistContext>
      <WatchlistContext>
        <TracklistContext>
          <Sidebar>
            <div className="main-container">
              <Component {...pageProps} />
            </div>
          </Sidebar>
        </TracklistContext>
      </WatchlistContext>
    </ToplistContext>
  );
}
