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
    border-radius: .8rem;
    background: rgba(0, 0, 0, .8);
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
    border-radius: .8rem;
    padding: 0 .8rem;
    backdrop-filter: blur(20px);
    background: rgba(51, 42, 42, 0.064);
`

export const CloseButton = styled.i`
    svg{
        top: 2rem;
        right: 2rem;
        width: 2rem;
        height: 2rem;
        border-radius: .4rem;
        background: #fff;
        transition: .2s;
        position: absolute;

        &:hover{
            cursor: pointer;
            background: #ccc;
        }
    }
`

export const Details = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: .8rem;
    overflow: scroll;

    ::-webkit-scrollbar{
        width: 0;
    }

    ::-webkit-scrollbar-track{
        background-color: transparent;
        border-radius: .4rem;
    }

    ::-webkit-scrollbar-thumb{
        background: transparent;
        border-radius: .4rem;
    }
`

export const Icon = styled.i`
    svg{
        color: #fff;
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
`

export const CardImage = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: auto;
    border-radius: .8rem;
    background: #fff;
    overflow: hidden;

    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
`

export const Description = styled.article`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`

export const Pet = styled.h1`
    font-size: 2em;
    margin: .4rem;
    color: #fff;
    text-transform: capitalize;
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Text = styled.p`
    text-align: center;
    font-size: .8rem;
    margin: .4rem;
    color: #fff;
    font-weight: bold;
    width: 3rem;
`

export const Button = styled.button`
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
    color: #000;
    background: #fff;

    &:hover{
        cursor: pointer;
        color: #fff;
        background: #000;
    }
`
