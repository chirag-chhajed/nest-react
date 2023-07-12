import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api");
        const text = await response.text();
        setGreeting(text);
      } catch (error) {
        console.log(error);
      }
    }
    void fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{greeting}</h1>
    </>
  );
}

export default App;
