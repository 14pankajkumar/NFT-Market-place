import Head from "next/head";
import { MoralisProvider } from "react-moralis";
import { Navbar } from "../components";
import ContextStoreProvider from "../context/ContextStoreProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  const appId = process.env.NEXT_PUBLIC_APP_ID
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
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
