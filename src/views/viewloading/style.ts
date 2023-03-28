import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const Content = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: #ff6b00;
    /* box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15); */

    svg{
        width: 80px;
        height: 80px;
    }

    svg path{
        fill: #fff;
    }

    svg g{
        animation: svgLatir .6s infinite;
    }

    @keyframes svgLatir {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`