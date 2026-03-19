import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
   <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900">
  <h1 className="font-bold text-lg dark:text-white">Saranya</h1>

     <button onClick={() => setDark(!dark)}>
        {dark ? "🌙" : "☀️"}
      </button>

      </nav>
  );
}