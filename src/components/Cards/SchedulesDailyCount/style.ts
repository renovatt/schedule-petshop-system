import styled from "styled-components";

export const Container = styled.section`
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
        background: #fff;
        height: 8rem;
        width: 15rem;
        margin: .8rem;
        padding: .8rem;
        border-radius: .8rem;
        box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);

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
    }
`

export const Title = styled.h5``

export const Count = styled.span`
    color: #101010;
    font-weight: bold;
    font-size: 2rem;
`