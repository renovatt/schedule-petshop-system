
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: sans-serif;
}

body {
    min-width: 100vw;
    min-height: 100vh;
    background:#f01
}


*, input, button{
    border:0;
    outline:0;
}

input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
}

/* input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
} */

a{
    text-decoration: none;
}

li{
    list-style: none;
}

button{
    cursor:pointer;
}`
