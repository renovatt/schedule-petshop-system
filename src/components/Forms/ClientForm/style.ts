import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-wrap: wrap;
    padding: 2rem;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);
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
    color: #333;
    text-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);
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
    border-radius: .8rem;
    margin-top: .4rem;
    padding-left: .4rem;
    transition: all .3s;
    border: 1px solid #ccc;
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);

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
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 2rem;
`

export const Button = styled.button`
    text-align: center;
    width: 15rem;
    height: 3rem;
    font-weight: bold;
    border-radius: .8rem;
    transition: all .3s;
    color: #fff;
    background: #000;
    border: 1px solid transparent;
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);
    text-shadow: 5px 5px 25px rgba(0, 0, 0, 0.95);

    &:hover{
        color: #000;
        background: #fff;
        border: 1px solid #000;
        /* background: #24c2ca; */
    }
`