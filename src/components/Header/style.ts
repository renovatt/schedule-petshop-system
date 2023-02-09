import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    left: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 15rem;
    height: 100vh;
    background: #fff;

    svg{
        width: 3.5rem;
        height: 3.5rem;
        margin: 1rem;
    }
`