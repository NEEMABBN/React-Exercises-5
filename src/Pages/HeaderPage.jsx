import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../App";
import { useCookies } from "react-cookie";

export default function HeaderPage() {
  const { isLogin } = useContext(appContext);
  const [cookie, setCookie] = useCookies(["name"]);
  return (
    <header className="flex flex-row justify-between items-center bg-indigo-200 p-3 rounded-xl container">
      {isLogin ? (
        <Link
          to="/"
          className="bg-blue-600 text-white p-2 font-bold rounded-lg hover:bg-blue-800"
        >
          Login
        </Link>
      ) : (
        <span className="text-green-600 font-bold">{cookie.name}</span>
      )}

      <div className="flex flex-row items-center justify-around w-[40%]">
        <Link
          to="/"
          className="text-[18px] font-semibold text-blue-600 hover:text-blue-800"
        >
          Login Page
        </Link>
        <Link
          to="/Article"
          className="text-[18px] font-semibold text-blue-600 hover:text-blue-800"
        >
          Article Page
        </Link>
        <Link
          to="/About"
          className="text-[18px] font-semibold text-blue-600 hover:text-blue-800"
        >
          About Page
        </Link>
      </div>
    </header>
  );
}
