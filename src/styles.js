import { createGlobalStyle } from 'styled-components';
import Normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${Normalize}

  body {
    background-color: #fafafa;
    font-family: 'Comfortaa', cursive;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;
