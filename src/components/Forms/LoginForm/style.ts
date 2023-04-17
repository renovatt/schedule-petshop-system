import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: .8rem;
    margin-bottom: .4rem;
`

export const Label = styled.label`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 5rem;
    width: 15rem;
    font-weight: bold;
    font-size: .9rem;
    margin: .4rem;
    color: var(--text-secondary-color);
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
    border-radius: .4rem;
    margin-top: .4rem;
    padding-left: .4rem;
    transition: all .3s;
    color: var(--text-secondary-color);
    border: 1px solid var(--border-secondary-color);
    background-color: var(--main-background);
    /* box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.15); */

    &:focus{
        border-color: var(--border-primary-color);
    }
`

export const InputAlert = styled.span`
    font-size: .6rem;
    color: var(--text-alert-color);
    padding: .2rem;
`

export const Button = styled.button`
    text-align: center;
    width: 15rem;
    height: 2rem;
    font-weight: bold;
    border-radius: .4rem;
    transition: all .3s;
    color: var(--text-main-color);
    background: var(--secondary-background);
    border: 1px solid transparent;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);

    &:hover{
        color: var(--text-secondary-color);
        background: var(--main-background);
        border-color: var(--border-secondary-color);
    }
`