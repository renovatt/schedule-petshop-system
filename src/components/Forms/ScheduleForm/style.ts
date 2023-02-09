import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-wrap: wrap;

    padding: 1rem;
    width: 82.4vw;
    height: 100%;
    background: #888;
`

export const Label = styled.label`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    height: 5rem;
    width: 15rem;
    font-weight: bold;
    font-size: .9rem;
    margin: .4rem;
    color: #fff;
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
    border: 1px solid transparent;

    &:focus{
        border: 1px solid #24c2ca;
    }
`

export const InputAlert = styled.span`
    font-size: .6rem;
    color: #f01;
    padding: .2rem;
`

export const ButtonContent = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 2rem;
`

export const Button = styled.button`
    text-align: center;
    width: 10rem;
    height: 2rem;
    font-weight: bold;
    border-radius: .4rem;
    transition: all .3s;

    &:hover{
        color: #fff;
        background: #24c2ca ;
    }
`