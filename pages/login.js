import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { contextStore } from "../context/ContextStoreProvider";

function Login() {
  const { authenticate, isAuthenticated } = useContext(contextStore);
  const router = useRouter();

  useEffect(() => {
    const redirectToHome = () => {
      if (isAuthenticated) {
        router.push("/");
        console.log("Pushed to Home");
      }
    };
    redirectToHome();
  }, [isAuthenticated, router]);

  return (
    <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <h1 className="py-5 text-3xl">Metaverse Marketplace</h1>
      <button
        onClick={authenticate}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
      <h3 className="py-10 text-3xl">
        * Please Login using
        <a
          href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
          target="_blank"
          className="text-red-900"
        >
          Metamask
        </a>
      </h3>
    </section>
  );
}

export default Login;
