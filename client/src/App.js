import { useState } from "react";
import { FilterProvider } from "./context/FilterContext/FilterContext";
import { GlobalStyle } from "./Theme/GlobalStyle";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Theme from "./Theme/Theme";

const App = () => {
  // eslint-disable-next-line
  const [theme, setTheme] = useState("light");

  // ? event handler
  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <Theme theme={theme}>
      <GlobalStyle />
      <FilterProvider>
        <Nav onClick={handleTheme} />
        <Header />
      </FilterProvider>
    </Theme>
  );
};

export default App;
