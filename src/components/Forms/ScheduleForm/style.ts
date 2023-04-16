import styled from "styled-components"

export const SvgContent = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--main-background);

    &:hover{
        cursor: pointer;
    }

    svg{
        width: 1.75rem;
        height: 1.75rem;
        transition: all .3s;
        color: var(--svg-secondary-color);
    }
`

export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-wrap: wrap;
    padding: .8rem;
    width: 100%;
    height: 100%;

    @media (max-width: 70rem) {
        justify-content: center;
        align-items: center;
    }
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
    border: 1px solid var(--border-clean-color);
    background-color: var(--main-background);
    /* box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25); */

    &:focus{
        border: 1px solid var(--border-primary-color);
    }
`

export const DataList = styled.datalist``

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
    background-color: var(--main-background);
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/var(--text-secondary-color)/svg" viewBox="0 0 24 24" fill="%23333"><path d="M7 10l5 5 5-5z"/></svg>');
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
        color: var(--text-main-color);
        background-color: var(--primary-background);
    }
`

export const InputAlert = styled.span`
    font-size: .6rem;
    color: var(--text-alert-color);
    padding: .2rem;
    width: 100%;
`

export const CheckLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 5rem;
    width: 15rem;
    font-weight: bold;
    font-size: .9rem;
    margin: .4rem;
    color: var(--text-secondary-color);
    text-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);
`

export const CheckInput = styled.input`
    height: 2rem;
    width: 2rem;
    margin-right: .4rem;
`

export const ButtonContent = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 2rem;

    @media (max-width: 70rem) {
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
    }
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
    text-shadow: 5px 5px 25px rgba(0, 0, 0, 0.95);

    &:hover{
        color: var(--text-secondary-color);
        background: var(--main-background);
        border: 1px solid var(--border-clean-color);
    }

    &:disabled{
        cursor: not-allowed;
        color: var(--text-main-color);
        background: var(--secondary-background);
    }
`