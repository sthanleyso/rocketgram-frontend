import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fafafa;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;
