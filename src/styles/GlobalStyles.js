import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import DefaultColors from './DefaultColors';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased !important;
    box-sizing: border-box;
  }

  html, body, #root{
    width: 100%;
    height: 100%;
    background: ${DefaultColors.backgroundApplication};
  }

  body, input, button, a{
    font: 14px "Gotham", 'Lato', 'Montserrat', Arial, sans-serif;
    color: ${DefaultColors.seaBlueHex};
  }

  input, button{
    outline: none;
    border: 0;
  }

  button{
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }
`;
