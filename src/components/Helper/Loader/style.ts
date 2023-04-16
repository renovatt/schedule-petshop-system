import styled from "styled-components";

export const Wrapper = styled.section`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    top: 0;
    left: 0;
    z-index: 1000;
`

export const Loading = styled.section`
    margin: auto;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
    border-radius: 50%;
    background-color: var(--main-background);
`