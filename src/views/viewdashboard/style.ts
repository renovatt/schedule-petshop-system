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
    overflow: hidden;

    @media (max-width: 70rem) {
        overflow: initial;
        margin-top: 1rem;
    }
`

export const Content = styled.div`
    position: relative;
    height: 95%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: .4rem;
    overflow: hidden;
    background-color: var(--highlight-color);
    /* margin-left: 4rem; */
    /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15); */

    @media (max-width: 70rem) {
        margin: 0;
        flex-direction: column;
        padding: .8rem 0;
        width: 95%;
    }
`

export const CardThumbContent = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border-radius: .4rem;

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
    border-radius: .4rem;

    @media (max-width: 70rem) {
        min-height: auto;
        flex-wrap: initial;
        flex-direction: column;
    }
`

export const Thumb = styled.section`
    display: none;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100%;
    border-radius: .4rem;
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
    width: 40%;
    height: 95%;
    border-radius: .4rem;
    margin: .8rem;
    overflow-y: auto;

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
    background-color: var(--main-background);
    padding: .4rem;
    overflow: hidden;
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
    color: var(--text-secondary-color);

    svg{
        width: 2rem;
        height: 2rem;
        color: var(--svg-secondary-color);
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
    padding: 8px 28px 8px 8px;
    background-color: var(--main-background);
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>');
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 13px 13px;

    &:focus{
        border: 1px solid var(--border-primary-color);
    }
`