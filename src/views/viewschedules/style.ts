import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;    

    @media (max-width: 70rem) {
        margin-bottom: 10rem;
    }
`

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media (max-width: 70rem) {
        overflow: initial;
    }
`

export const Content = styled.div`
    position: relative;
    height: 95%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .4rem;
    overflow: hidden;
    background: var(--highlight-color);
    /* margin-left: 4rem; */
    /* box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.25); */

    @media (max-width: 70rem) {
        margin: 0;
        width: 95%;
        flex-direction: column-reverse;
    }
`

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 95%;
    border-radius: .4rem;
    margin: .4rem;
    overflow-y: auto;

    ::-webkit-scrollbar-track{
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb{
        background: transparent;
    }

    @media (max-width: 70rem) {
        width: 90%;
        min-height: auto;
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
    background: var(--main-background);
    padding: .4rem;
    overflow: hidden;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: .8rem;
    width: 100%;

    @media (max-width: 70rem) {
            flex-direction: column;
        }
`

export const Date = styled.div`
    display: flex;
    margin-bottom: .8rem;

    input{
        height: 2rem;
        width: 100%;
        text-align: start;
        border-radius: .4rem;
        margin-top: .4rem;
        padding-left: .4rem;
        transition: all .3s;
        border: 1px solid var(--border-clean-color);
        background-color: var(--main-background);
        
        padding: 8px 28px 8px 8px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>');
        background-repeat: no-repeat;
        background-position: right 8px center;
        background-size: 13px 13px;

        &:focus{
            border-color: var(--border-primary-color);
        }
    }
`

export const Span = styled.span`
    margin-right: .4rem;
`

export const Title = styled.h2`
    margin: 1rem 0;
    color: var(--text-secondary-color);
`

export const ImageContainder = styled.div`
    position: absolute;
    bottom: -2rem;
    right: 0;
    width: 15rem;
    height: 15rem;

    @media (max-width: 70rem) {
        position: static;
        width: 8rem;
        height: 8rem;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`