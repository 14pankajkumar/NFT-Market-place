import Link from "next/link";
import { useContext } from "react";
import { contextStore } from "../context/ContextStoreProvider";

function Navbar() {
  const { user, logout, isAuthenticated } = useContext(contextStore);
  
  return isAuthenticated ? (
    <nav className="border-b p-6">
      <p className="text-4xl font-bold">Metaverse marketplace</p>
      <div className="flex flex-row justify-between mt-4">
        <div className="justify-start">
          <Link href="/">
            <a className="mr-4 text-pink-500 hover:text-pink-700">Home</a>
          </Link>
          <Link href="/create-item">
            <a className="mr-4 text-pink-500 hover:text-pink-700">
              Sell Digital Assets
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-4 text-pink-500 hover:text-pink-700">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creater-dashboard">
            <a className="mr-4 text-pink-500 hover:text-pink-700">
              Creator Dashboard
            </a>
          </Link>
        </div>
        {isAuthenticated ? <div className="justify-end flex flex-row">
          <button
            onClick={() =>
              navigator.clipboard
                .writeText(user.get("ethAddress"))
                .then(() => alert("Address cpoied"))
            }
            className="mr-4 text-pink-500 hover:text-pink-700"
          >
            {user.get("ethAddress")}
          </button>
          <button
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            LogOut
          </button>
        </div> : ""}
      </div>
    </nav>
  ) : ""
}

export default Navbar;