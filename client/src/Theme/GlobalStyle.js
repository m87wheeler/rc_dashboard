import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html,
    body {
    font-family: "Roboto", sans-serif;
    background: ${(p) => p.theme.common.body};
    color: ${(p) => p.theme.common.text};
    transition: background .2s ease-in-out, color .2s ease-in-out;
    }
`;
