import styled from "styled-components";
import InputMask from 'react-input-mask';

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
    background-color: var(--secondary-background);
    /* background: rgba(0, 0, 0, .8); */
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: .4rem;
    border-radius: .4rem;
    padding: 0 .8rem;
    /* backdrop-filter: blur(20px); */
    /* background-color: rgba(51, 42, 42, 0.064); */
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;

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

export const Details = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: .4rem;
    overflow: scroll;

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

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: .8rem;
`

export const CardImage = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    overflow: hidden;
    border-radius: .4rem;

    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: var(--primary-background);
        border: 2px solid var(--main-background);
    }
`

export const Icon = styled.i`
    svg{
        width: 1.5rem;
        height: 1.5rem;
        color: var(--main-background);
        margin-top: -5rem;

        &:hover{
            transition: all .3s;
            cursor: pointer;
            color: var(--text-primary-color);
        }
    }
`

export const Description = styled.article`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: .8rem;
    width: 100%;
    height: 100%;
`

export const Info = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
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
    color: var(--modal-label-text-color);
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
    border: 1px solid var(--border-clean-color);
    color: var(--modal-input-text-color);
    background-color: var(--modal-input-background-color);

    &::placeholder{
        color: var(--modal-input-text-color);
    }

    &:focus{
        border-color: var(--border-primary-color);
    }
`

export const ContactInputMask = styled(InputMask)`
    height: 2rem;
    width: 100%;
    text-align: start;
    border-radius: .4rem;
    margin-top: .4rem;
    padding-left: .4rem;
    transition: all .3s;
    border: 1px solid var(--border-clean-color);
    color: var(--modal-input-text-color);
    background-color: var(--modal-input-background-color);

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

export const Text = styled.p`
    text-align: start;
    font-size: .8rem;
    margin: .4rem;
    color: var(--text-primary-color);
    font-weight: bold;
    width: 100%;
`

export const Select = styled.select`
    padding: .4rem;
    margin-top: .4rem;
    font-size: .8rem;
    line-height: 1.3;
    color: #666;
    width: 100%;
    height: 2rem;
    border: 1px solid var(--border-clean-color);
    border-radius: .4rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: var(--modal-input-text-color);
    background-color: var(--modal-input-background-color);
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M7 10l5 5 5-5z"/></svg>');
    background-position: right 10px center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all .3s;

    &:focus {
        outline: none;
        border-color: var(--border-primary-color);
    }
`

export const Option = styled.option`
    padding: .4rem;
    font-size: .8rem;
    border-radius: .4rem;
    color: var(--text-secondary-color);
    background-color: var(--main-background);

    &:hover {
        background-color: var(--primary-background);
    }

    &:checked {
        color: var(--main-background);
        background-color: var(--primary-background);
    }
`

export const SaveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    font-weight: bold;
    border: none;
    margin: .4rem;
    outline: none;
    transition: .2s;
    border-radius: .4rem;
    color: var(--text-secondary-color);
    background-color: var(--main-background);

    &:hover{
        cursor: pointer;
        color: var(--main-background);
        background-color: var(--primary-background);
    }
`

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    font-weight: bold;
    border: none;
    margin: .4rem;
    outline: none;
    transition: .2s;
    border-radius: .4rem;
    color: var(--text-secondary-color);
    background-color: var(--main-background);

    &:hover{
        cursor: pointer;
        color: var(--main-background);
        background-color: var(--alert-background-color);
    }
`