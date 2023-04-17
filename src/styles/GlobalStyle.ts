
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --max-width: 1100px;

    --highlight-color: #d1e7e0;
    --main-background: #ffffff; 
    --primary-background: #fb8500;
    --secondary-background: #024959;
    --alert-background-color: #f94144;

    --text-clean-color: #d1e7e0;
    --text-alert-color: #f01;
    --text-main-color: #ffffff;
    --text-primary-color: #fb8500;
    --text-secondary-color: #024959;
    
    --border-primary-color: #fb8500;
    --border-secondary-color: #024959;
    --border-clean-color: #ccc;

    --input-background-color: #ffffff;

    --modal-input-text-color: #ffffff;
    --modal-label-text-color: #ffffff;
    --modal-input-background-color: #024959;

    --svg-main-color: #ffffff;
    --svg-primary-color: #fb8500;
    --svg-secondary-color: #024959;
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
    background: var(--background-white-color);
}

main{
    display: flex;
    justify-content: space-around;
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

