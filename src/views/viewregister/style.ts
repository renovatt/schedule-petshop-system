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
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
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
        justify-content: center;
        align-items: center;
    }
`

export const ImageContainder = styled.div`
    position: absolute;
    top: 5rem;
    right: 8rem;
    width: 25rem;
    height: 25rem;

    @media (max-width: 70rem) {
        position: static;
        width: 10rem;
        height: 10rem;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
