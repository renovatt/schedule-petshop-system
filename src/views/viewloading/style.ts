import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--main-background);
    
`

export const Content = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: var(--primary-background);
    /* box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15); */

    svg{
        width: 80px;
        height: 80px;
    }

    svg path{
        fill: var(--secondary-background);
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