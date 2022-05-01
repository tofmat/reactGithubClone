import React, { useState } from "react";
import "./darkMode.css";
export const DarkMode = () => {
  const [theme, setTheme] = useState("");
  const invert = () => {
    setTheme(theme === "darkMode" ? "" : "darkMode"); //toggles theme value
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // stores theme value on local storage
  };
  return (
    <div>
      <div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" onClick={invert}></span>
        </label>
      </div>
    </div>
  );
};
