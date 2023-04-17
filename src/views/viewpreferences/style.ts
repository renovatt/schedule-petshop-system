import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;    

    @media (max-width: 70rem) {
        margin-bottom: 5rem;
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
        justify-content: flex-start;
    }
`

export const ImageContainder = styled.div`
    position: absolute;
    bottom: 0;
    right: 2rem;
    width: 20rem;
    height: 20rem;

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

export const ImageContainder2 = styled.div`
    position: absolute;
    top: 0;
    left: 2rem;
    width: 20rem;
    height: 20rem;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);

    @media (max-width: 70rem) {
        display: none;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-bottom: .8rem; */

    @media (max-width: 70rem) {
        margin-top: 2rem;
    }
`

export const Title = styled.h2`
    margin-top: .4rem;
    margin-bottom: .4rem;
    color: var(--text-secondary-color);
`