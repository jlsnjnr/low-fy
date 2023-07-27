"use client";

import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const Switch = () => {
  const [theme, setTheme] = useState(false);
  return (
    <button
      onClick={() => setTheme(!theme)}
      className={`flex items-center justify-between bg-[hsla(0,0%,7%,.75)] w-14 px-1 h-8 rounded-full ${
        theme ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-6 h-6 rounded-full bg-white" />

      {theme ? (
        <FiMoon color="white" size={16} />
      ) : (
        <FiSun color="white" size={16} />
      )}
    </button>
  );
};
