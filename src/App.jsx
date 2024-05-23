import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderPage from "./Pages/HeaderPage";
import LoginPage from "./Pages/LoginPage";
import ArticlePage from "./Pages/ArticlePage";
import AboutPage from "./Pages/AboutPage";
import { createContext, useState } from "react";

export const appContext = createContext(null);

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center">
      <BrowserRouter>
        <appContext.Provider value={{ isLogin, setIsLogin }}>
          <HeaderPage />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Article" element={<ArticlePage />} />
            <Route path="/About" element={<AboutPage />} />
          </Routes>
        </appContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
