import Head from "next/head";
import { MoralisProvider } from "react-moralis";
import { Navbar } from "../components";
import ContextStoreProvider from "../context/ContextStoreProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const appId = "MWmpjHe3bYiSJXUetHNZlsVv1BmBgyYNhfF1rTtW";
  const serverUrl = "https://5cehoeqencqr.usemoralis.com:2053/server";

  return (
    <div>
      <Head>
        <title> NFT MarketPlace </title>
      </Head>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <ContextStoreProvider>
          <Navbar />
          <Component {...pageProps} />
        </ContextStoreProvider>
      </MoralisProvider>
    </div>
  );
}

export default MyApp;
