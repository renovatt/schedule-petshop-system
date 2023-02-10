import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;    
`

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: .4rem;
`

export const Content = styled.div`
    position: relative;
    height: 95%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .8rem;
    overflow: hidden;
    margin-left: 4rem;
    background: #fb1;
    box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.25);

    @media (max-width: 70rem) {
        margin: 0;
    }
`

export const ImageContainder = styled.div`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: 20rem;
    height: 20rem;

    @media (max-width: 70rem) {
        display: none;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: drop-shadow(0 -6mm 4mm rgba(0, 0, 0, 0.25));
    }
`
