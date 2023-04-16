import styled from "styled-components";

export const Container = styled.section`
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
        height: 8rem;
        width: 15rem;
        margin: .8rem;
        padding: .8rem;
        border-radius: .4rem;
        background-color: var(--main-background);
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);    

        @media (max-width: 70rem) {
            width: 100%;
        }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    padding: .8rem;

    svg{
        width: 2.5rem;
        height: 2.5rem;
        color: var(--svg-secondary-color);
    }
`

export const Title = styled.h5`
    color: var(--text-secondary-color);
`

export const Count = styled.span`
    color: var(--text-secondary-color);
    font-weight: bold;
    font-size: 2rem;
`