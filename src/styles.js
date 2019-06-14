import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    background-color: #fafafa;
    font-family: 'Comfortaa', cursive;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;
