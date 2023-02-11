import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const ContentList = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: .8rem;
    overflow-y: scroll;
    overflow-x: hidden;
    border-radius: .8rem;

    ::-webkit-scrollbar{
        width: 6px;
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

export const List = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3rem;
    margin: .2rem;
    border-radius: .4rem;
    color: #fff;
    background: #101010;
    
    &:hover{
        cursor: pointer;
    }
`

export const ContentLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: auto;
    padding-left: .8rem;
`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    /* background: ${(props) => props.color}; */
    background: #fff;
    border-radius: 50%;
    margin: .4rem;

    svg{
        width: 2rem;
        height: 2rem;
        padding: .4rem;
        color: #000;
    }
`

export const PetName = styled.h3`
    text-align: start;
    color: #fff;
    font-size: .8rem;
    width: 100%;
    &::first-letter {
        text-transform: uppercase;
    }
`

export const Span = styled.span`
    padding: .4rem;
`

export const Breed = styled.p`
    text-align: start;
    color: #fff;
    font-size: .8rem;
    width: 100%;
    &::first-letter {
        text-transform: uppercase;
    }
`

export const ContentRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 4rem;
    padding-right: .8rem;
`

export const Time = styled.h3`
text-align: end;
color: #fff;
font-size: 1.5rem;
width: 10rem;
`