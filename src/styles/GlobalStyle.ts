
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --max-width: 1100px;
    --background-default: rgb(255,108,21);
    --background-linear: linear-gradient(
        0deg, rgba(255,108,21,0.994014793417367) 0%,
        rgba(232,138,60,1) 14%, rgba(233,255,112,1) 73%);

        /* --text-dark-color: #252422; */
        --text-dark-color: #323031;
        --text-clean-color: #eaf4f4;
        --text-white-color: #fceade;
        --text-orange-color: #fb8500;
        --text-yellow-color: #e9ff70;
        --text-red-color: #f94144;
        --text-alert-color: #f01;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: sans-serif;
}

body {
    min-width: 100vw;
    min-height: 100vh;
    width: var(--max-width);
    background: var(--text-white-color);
}

main{
    display: flex;
    max-width: var(--max-width);
    justify-content: space-around;
    width: var(--max-width);
}

::-webkit-scrollbar{
    width: 6px;
}
::-webkit-scrollbar-track{
    background-color: #fff;
    border-radius: .4rem;
}
::-webkit-scrollbar-thumb{
    background: #ed2f5a;
    border-radius: .4rem;
}

html {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
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

.animation-card{
    opacity: 0;
    transform: translateY(-20px);
    animation: fade .3s forwards;

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }
}
`

