import { ThemeProvider } from "styled-components";

const lightTheme = {
  common: {
    body: "#ddd",
    text: "#111",
  },
};

const darkTheme = {
  common: {
    body: "#111",
    text: "#fff",
  },
};

const Theme = ({ theme = "light", children }) => {
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
