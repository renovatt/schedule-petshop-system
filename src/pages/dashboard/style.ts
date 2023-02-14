import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    
    @media (max-width: 70rem) {
        height: 100%;
        margin-bottom: 8rem;
    }
`

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: .4rem;
    overflow: hidden;
    margin-top: 1rem;

    @media (max-width: 70rem) {
        overflow: initial;
    }
`

export const Content = styled.div`
    position: relative;
    height: 95%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: .8rem;
    overflow: hidden;
    margin-left: 4rem;
    background: #fb1;
    box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.25);

    @media (max-width: 70rem) {
        margin: 0;
        flex-direction: column;
        padding: .8rem 0;
    }
`

export const CardThumbContent = styled.div`
    position: relative;
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border-radius: .8rem;

    @media (max-width: 70rem) {
        width: 90%;
        flex-direction: column-reverse;
    }
`

export const SectionCards = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    border-radius: .8rem;

    @media (max-width: 70rem) {
        min-height: auto;
        flex-wrap: initial;
        flex-direction: column;
    }
`

export const Thumb = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100%;
    border-radius: .8rem;
    margin: .4rem;
    overflow: hidden;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.55);

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Section = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: auto;
    height: 95%;
    border-radius: .8rem;
    margin: .4rem;
    overflow-y: auto;
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);

    ::-webkit-scrollbar-track{
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb{
        background: transparent;
    }

    @media (max-width: 70rem) {
        width: 90%;
        max-height: 25rem;
    }
`
export const LastRegister = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #fff;
    padding: .4rem;
    overflow: hidden;

    @media (max-width: 70rem) {
        /* max-height: 25rem; */
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .8rem;
    margin-top: .4rem;
    width: 90%;
`

export const TitleContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        width: 2rem;
        height: 2rem;
    }
`

export const Title = styled.h3`
    margin: .4rem;
`

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 12rem;
`

export const Search = styled.input`
    height: 2rem;
    width: 100%;
    text-align: start;
    font-size: .8rem;
    padding-left: .4rem;
    border-radius: .4rem;
    border: 1px solid #ccc;
    transition: all .3s;

    &:focus{
        border: 1px solid #24c2ca;
    }
`

export const Button = styled.button`
    text-align: center;
    border-radius: .4rem;
    height: 2rem;
    width: 3rem;
    border: 1px solid #ccc;
    margin-left: .4rem;
    transition: all .3s;

    &:hover{
        cursor: pointer;
        border: 1px solid #24c2ca;
    }

    svg{
        margin-top: .2rem;
    }
`