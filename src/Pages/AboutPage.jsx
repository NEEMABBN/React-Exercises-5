import React, { useContext } from "react";
import { appContext } from "../App";

export default function AboutPage() {
  const { isLogin } = useContext(appContext);
  return (
    <div className="mt-8">
      {isLogin ? (
        <div className="flex flex-col items-center bg-red-400 py-6 px-12 mt-8 rounded-xl">
          <h1 className="text-red-700 text-[20px] font-bold">About Page :</h1>
          <h2 className="text-red-700 text-[20px] font-bold">
            Please Login !!!
          </h2>
        </div>
      ) : (
        <h1 className="text-green-700 bg-green-400 py-5 px-12 rounded-xl text-[20px] font-bold">
          You Are In About Page !
        </h1>
      )}
    </div>
  );
}
