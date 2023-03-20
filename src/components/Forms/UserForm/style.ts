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
    height: 5rem;
    width: 100%;
    font-weight: bold;
    font-size: .9rem;
    margin-top: .4rem;
    color: #000;
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
    margin-top: .4rem;
    padding-left: .4rem;
    transition: all .3s;
    border: 1px solid #ccc;
    background-color: #fff;

    &:focus{
        border-color: #ff6b00;
    }
`

export const InputAlert = styled.span`
    font-size: .6rem;
    color: #f01;
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
    color: #000;
    background: #fff;

    &:hover{
        cursor: pointer;
        color: #fff;
        background: #000;
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
    color: #000;
    background: #fff;

    @media (max-width: 70rem) {
     width: 90%;
    }

    &:hover{
        cursor: pointer;
        color: #fff;
        background: #000;
    }
`