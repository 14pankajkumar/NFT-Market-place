import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

export const contextStore = React.createContext();

function ContextStoreProvider(props) {
  const { isUnauthenticated, isAuthenticated, user, authenticate, logout } =
    useMoralis();
  const router = useRouter();

  useEffect(() => {
    const redirectToLogin = () => {
      if (isUnauthenticated) {
        router.push("/login");
        console.log("Pushed to login page");
      }
    };
    redirectToLogin();
  }, [isUnauthenticated]);

  return (
    <contextStore.Provider
      value={{
        isUnauthenticated,
        isAuthenticated,
        user,
        authenticate,
        logout,
      }}
    >
      {props.children}
    </contextStore.Provider>
  );
}

export default ContextStoreProvider;
