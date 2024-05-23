import React, { useContext, useRef } from "react";
import { appContext } from "../App";
import { useCookies } from "react-cookie";

export default function LoginPage() {
  const { isLogin, setIsLogin } = useContext(appContext);

  const [cookie, setCookie] = useCookies(["name"]);

  const onChangeValue = (newName) => {
    setCookie("name", newName.current.value);
  };

  const loginHandler = () => {
    if (userInput.current.value === "") {
      alert("Please Check Your Username !!!");
    } else {
      setIsLogin(false);
    }
  };

  const userInput = useRef();
  const saveCookie = (e) => {
    if (e.target.checked) {
      if (userInput.current.value !== "") {
        onChangeValue(userInput);
      } else {
        e.target.checked = false
      }
    }
  };

  return (
    <div>
      {isLogin ? (
        <div className="flex flex-col justify-center items-center mt-8 bg-indigo-200 p-5 rounded-lg">
          <h2 className="text-blue-800 text-[20px] font-bold mb-2">
            Login Form
          </h2>
          <input
            type="text"
            placeholder="USER NAME"
            className="my-1 px-5 bg-indigo-300 text-white placeholder:text-white rounded-md"
            ref={userInput}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            className="my-1 px-5 bg-indigo-300 text-white placeholder:text-white rounded-md"
          />
          <input
            type="email"
            placeholder="EMAIL"
            className="my-1 px-5 bg-indigo-300 text-white placeholder:text-white rounded-md"
          />
          <button
            className="bg-blue-600 text-white w-full rounded-md hover:bg-blue-800 mt-4"
            onClick={loginHandler}
          >
            Done!
          </button>
          <div className="flex flex-row justify-center items-center w-full mt-2">
            <input
              type="checkbox"
              className="cursor-pointer"
              onClick={saveCookie}
            />
            <span className="text-[15px] font-medium mx-1 text-indigo-500">
              REMEMBER ME
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center bg-green-400 py-6 px-12 mt-8 rounded-xl">
          <h1 className="text-green-700 text-[20px] font-bold">Login Page :</h1>
          <h2 className="text-green-700 text-[20px] font-bold">
            Login is Done !!!
          </h2>
        </div>
      )}
    </div>
  );
}
