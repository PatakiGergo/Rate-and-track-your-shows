import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/searchcard.css";
import "@/styles/searchbar.css";
import "@/styles/search-main.css";
import "@/styles/form.css";
import "@/styles/toplist-card.css";
import "@/styles/hot-card.css";
import "@/styles/ongoing-card.css";
import Head from "next/head";
import Wrapper from "./Wrapper";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <section className="main-container">
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </section>
    </>
  );
}
