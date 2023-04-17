import styled from "styled-components";

export const Form = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 25%;
    overflow: scroll;
    overflow-x: hidden;

    @media (max-width: 70rem) {
        width: 90%;   
    }

    ::-webkit-scrollbar{
        width: 0;
    }

    ::-webkit-scrollbar-track{
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb{
        background: transparent;
    }
`

export const Label = styled.label`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    /* height: 5rem; */
    width: 100%;
    font-size: .9rem;
    color: transparent;
    /* font-weight: bold; */
    /* margin-top: .4rem; */
    /* text-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25); */
`

export const Span = styled.span`
    text-align: start;
    font-size: .8rem;
    width: 100%;
`

export const Input = styled.input`
    height: 2rem;
    width: 100%;
    text-align: start;
    border-radius: .4rem;
    /* margin-top: .4rem; */
    padding-left: .4rem;
    transition: all .3s;
    color: var(--text-secondary-color);
    border: 1px solid var(--border-secondary-color);
    background-color: var(--main-background);

    &::placeholder{
        /* color: var(--input-text-color); */
    }

    &:focus{
        border-color: var(--border-primary-color);
    }
`

export const InputAlert = styled.span`
    font-size: .6rem;
    color: var(--text-alert-color);
    padding: .2rem;
    width: 100%;
`

export const SaveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2rem;
    font-weight: bold;
    border: none;
    margin: .4rem;
    outline: none;
    transition: .2s;
    border-radius: .4rem;
    color: var(--text-main-color);
    background: var(--secondary-background);

    &:hover{
        cursor: pointer;
        color: var(--text-secondary-color);
        background: var(--main-background);
        border: 1px solid var(--border-secondary-color);
    }
`

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 2rem;
    font-weight: bold;
    border: none;
    margin: .4rem;
    outline: none;
    transition: .2s;
    border-radius: .4rem;
    color: var(--text-main-color);
    background: var(--secondary-background);

    @media (max-width: 70rem) {
     width: 90%;
    }

    &:hover{
        cursor: pointer;
        color: var(--text-secondary-color);
        background: var(--main-background);
        border: 1px solid var(--text-secondary-color);
    }
`