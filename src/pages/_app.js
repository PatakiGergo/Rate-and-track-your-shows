import "@/styles/globals.css";
import Sidebar from "@/Components/Sidebar";
import "@/styles/layout.css";
import "@/styles/searchcard.css";
import "@/styles/searchbar.css";
import "@/styles/search-main.css";
import "@/styles/form.css";
import "@/styles/toplist-card.css";
import WatchlistContext from "@/context/watchlist-context";
import toplistContext from "@/context/toplist-context";
import ToplistContext from "@/context/toplist-context";

export default function App({ Component, pageProps }) {
  return (
    <ToplistContext>
      <WatchlistContext>
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </WatchlistContext>
    </ToplistContext>
  );
}
