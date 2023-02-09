
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: sans-serif;
}

body {
    color: #fff;
    background:#101010
}

html,body,#root{
    height:100%
}

*, input, button{
    border:0;
    outline:0;
}

a{
    text-decoration: none;
}

button{
    cursor:pointer;
}`
