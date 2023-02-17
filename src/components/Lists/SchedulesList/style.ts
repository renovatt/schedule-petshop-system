import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const ContentList = styled.ul`
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    /* overflow-y: scroll; */
    /* overflow-x: hidden; */

    ::-webkit-scrollbar-track{
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb{
        background: transparent;
    }
`

export const List = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: 3rem;
    margin: .2rem;
    border-radius: .4rem;
    color: #fff;
    background: #101010;
    transition: all .3s;
    
    &:hover{
        cursor: pointer;
        margin-left: 2rem;
    }
`

export const ContentListLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: auto;
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
    margin: .2rem;
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

export const ContentListRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 4rem;
`

export const Time = styled.h3`
    text-align: end;
    color: #fff;
    font-size: 1rem;
    padding-right: .4rem;


`