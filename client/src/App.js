import "./App.css";
import { useState, useEffect } from "react";
import { FilterProvider } from "./context/FilterContext/FilterContext";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([false, ""]);
  // eslint-disable-next-line
  const [theme, setTheme] = useState("light");

  // ? load data on mount
  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("/api/data");
      const res = await req.json();
      if (!res.success) {
        setError([true, res.message]);
      } else {
        setEntries(res.data);
      }
      setIsLoading(false);
    };

    // ! artificial delay
    const timeout = setTimeout(() => {
      fetchData();
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  // ? event handler
  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    console.log("setTheme");
  };
  return (
    <FilterProvider>
      {error[0] ? (
        <p>Error!</p>
      ) : (
        <>
          <Nav isLoading={isLoading} onClick={handleTheme} />
          <Header isLoading={isLoading} data={entries} />
        </>
      )}
    </FilterProvider>
  );
};

export default App;
