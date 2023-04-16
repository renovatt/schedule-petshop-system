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
    /* background: rgba(0, 0, 0, .8); */
    background-color: var(--secondary-background);
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
    /* background: rgba(51, 42, 42, 0.064); */
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
    position: relative;
`

export const CardImage = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 10rem;
    border-radius: .4rem;
    background: var(--main-background);
    overflow: hidden;

    @media (max-width: 70rem) {
        width: 5rem;
        height: 5rem;
    }

    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        padding: .1rem;
        border-radius: .4rem;
    }
`

export const Icon = styled.i`
    margin-top: -8rem;

    svg{
        width: 1.5rem;
        height: 1.5rem;
        color: var(--svg-main-color);

        &:hover{
            transition: all .3s;
            cursor: pointer;
            color: var(--svg-primary-color);
        }
    }

    @media (max-width: 70rem) {
        margin-top: -3rem;
    }
`

export const ConfirmButton = styled.button`
    position: absolute;
    right: 0;
    bottom: -.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 2rem;
    font-weight: bold;
    font-size: .8rem;
    border: none;
    margin: .4rem;
    outline: none;
    transition: .2s;
    border-radius: .4rem;
    color: var(--text-main-color);
    background: var(--primary-background);

    &:hover{
        cursor: pointer;
        color: var(--text-secondary-color);
        background: var(--main-background);
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
    color: var(--text-main-color);
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
    border: 1px solid var(--border-clean-color);
    color: var(--modal-input-text-color);
    background-color: var(--modal-input-background-color);

    &::placeholder{
        color: var(--modal-input-text-color);
    }

    &:focus{
        border-color: var(--border-primary-color);
    }

    &::-webkit-calendar-picker-indicator {
        filter: invert(100%);

        &:hover{
            cursor: pointer;
        }
    }
`

export const InputAlert = styled.span`
    font-size: .6rem;
    color: var(--text-alert-color);
    padding: .2rem;
    width: 100%;
`

export const ScheduleDate = styled.p`
    text-align: start;
    font-size: .6rem;
    margin: .4rem;
    color: var(--text-primary-color);
    font-weight: bold;
    width: 100%;
`

export const Text = styled.p`
    text-align: start;
    font-size: .6rem;
    margin: .4rem;
    color: var(--alert-background-color);
    font-weight: bold;
    width: 100%;
`

export const DataList = styled.datalist``

export const Select = styled.select`
    padding: .4rem;
    margin-top: .4rem;
    font-size: .8rem;
    line-height: 1.3;
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
        color: var(--text-main-color);
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
    background: var(--main-background);

    &:hover{
        cursor: pointer;
        color: var(--text-main-color);
        background: var(--primary-background);
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
    background: var(--main-background);

    &:hover{
        cursor: pointer;
        color: var(--text-main-color);
        background: var(--alert-background-color);
    }
`