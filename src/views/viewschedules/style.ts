import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;    

    @media (max-width: 70rem) {
        margin-bottom: 10rem;
    }
`

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: .4rem;
    overflow: hidden;

    @media (max-width: 70rem) {
        overflow: initial;
    }
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
        flex-direction: column-reverse;
    }
`

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 95%;
    border-radius: .8rem;
    margin: .4rem;
    overflow-y: auto;

    ::-webkit-scrollbar-track{
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb{
        background: transparent;
    }

    @media (max-width: 70rem) {
        width: 90%;
        min-height: auto;
    }
`

export const LastRegister = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    background: #fff;
    padding: .4rem;
    overflow: hidden;
`

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: .8rem;
`

export const Date = styled.div`
    display: flex;
    margin-bottom: .8rem;
`

export const Span = styled.span`
    margin-right: .4rem;
`

export const Input = styled.input``

export const Title = styled.h2`
    margin: 1rem 0;
`

export const ImageContainder = styled.div`
    position: absolute;
    bottom: -6rem;
    right: -4rem;
    width: 20rem;
    height: 20rem;

    @media (max-width: 70rem) {
        position: static;
        width: 10rem;
        height: 10rem;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`