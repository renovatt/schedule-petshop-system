import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: .4rem;
    background: rgba(0, 0, 0, .8);
`

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 30%;
    width: 30%;
    margin: 0;
    padding: .4rem;
    border-radius: .4rem;
    padding: 0 .8rem;
    backdrop-filter: blur(20px);
    background-color: rgba(51, 42, 42, 0.064);
    background-color: #000;

    @media (max-width: 70rem) {
        width: 90%;   
    }
`

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 2rem;
    font-weight: bold;
    border: none;
    margin: .4rem;
    outline: none;
    transition: .2s;
    border-radius: .4rem;
    color: #000;
    background: #fff;
    margin-top: 1rem;

    &:hover{
        cursor: pointer;
        color: #fff;
        background: #ff0000;
    }
`

export const Icon = styled.i`
    position: absolute;
    top: 1rem;
    right: .4rem;

    svg{
        width: 1.5rem;
        height: 1.5rem;
        color: #fff;
        margin-top: -5rem;

        &:hover{
            cursor: pointer;
        }
    }
`

export const Text = styled.p`
    font-size: .8rem;
    width: 100%;
    color: #fff;
    text-align: center;
    font-weight: bold;
`