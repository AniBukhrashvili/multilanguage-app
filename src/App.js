import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import PhotoSlider from "./components/Slider/Slider";

import { LanguageContext } from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("en");
  const location = useLocation();

  const value = {
    language,
    setLanguage,
  };
  return (
    <>
      <LanguageContext.Provider value={value}>
        <NavBar />
        {location.pathname === "/" && <PhotoSlider />}
        <Outlet />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
