
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
    background: #fff;
    /* background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(16,16,16,1) 0%, rgba(39,39,39,1) 100%); */
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
}

.animation-container{
    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }
}
`

