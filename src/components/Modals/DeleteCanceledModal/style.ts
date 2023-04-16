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
    background-color: var(--main-background);
`

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 30%;
    width: 40%;
    margin: 0;
    padding: .4rem;
    border-radius: .4rem;
    padding: 0 .8rem;
    background-color: var(--secondary-background);

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
    color: var(--text-secondary-color);
    background: var(--main-background);
    margin-top: 1rem;

    &:hover{
        cursor: pointer;
        color: var(--text-main-color);
        background: var(--alert-background-color);
    }
`

export const Icon = styled.i`
    position: absolute;
    top: 1rem;
    right: .4rem;

    svg{
        width: 1.5rem;
        height: 1.5rem;
        color: var(--text-main-color);
        margin-top: -5rem;

        &:hover{
            cursor: pointer;
            transition: all .3s;
            color: var(--svg-primary-color);
        }
    }
`

export const Text = styled.p`
    width: 100%;
    color: var(--text-main-color);
    font-size: .8rem;
    margin-top: 1.5rem;
    font-weight: bold;
    text-align: center;
`