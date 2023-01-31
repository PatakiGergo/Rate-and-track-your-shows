import "@/styles/globals.css";
import Sidebar from "@/Components/Sidebar";
import "@/styles/layout.css";
import "@/styles/searchcard.css";
import "@/styles/searchbar.css";
import "@/styles/search-main.css";
import WatchlistContext from "@/context/watchlist-context";

export default function App({ Component, pageProps }) {

  return (
    <WatchlistContext>
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
    </WatchlistContext>
  );
}
