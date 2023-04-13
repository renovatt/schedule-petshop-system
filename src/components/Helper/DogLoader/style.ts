import styled from "styled-components";

export const Wrapper = styled.section`
    /* position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    top: 0;
    left: 0;
    z-index: 1000; */
`

export const Loading = styled.button`
    border: none;
    cursor: pointer;
    color: #333;
    background: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;

    &:focus svg path,
    &:hover svg path{
        outline: none;
    }

    &:focus svg path,
    &:hover svg path{
        fill: var(--text-orange-color);
        stroke: var(--text-orange-color);
    }

    &:focus svg g,
    &:hover svg g{
        animation: dog .6s infinite;
    }

    @keyframes dog {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`