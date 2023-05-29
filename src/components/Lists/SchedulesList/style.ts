import styled from "styled-components";

export const Container = styled.div`
    position: relative;
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
    margin: .4rem;
    border-radius: .4rem;
    color: var(--text-main-color);
    background: var(--secondary-background);
    transition: all .3s;
    
    &:hover{
        cursor: pointer;
        margin-left: 1rem;
    }
`

export const ContentListLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: auto;
`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    /* background: ${(props) => props.color}; */
    background: var(--main-background);
    border-radius: 50%;
    margin: .4rem;

    svg{
        width: 2rem;
        height: 2rem;
        padding: .4rem;
        color: var(--svg-secondary-color);
    }
`

export const PetName = styled.h3`
    text-align: start;
    color: var(--text-main-color);
    font-size: .8rem;
    width: auto;

    &::first-letter {
        text-transform: uppercase;
    }
`

export const Span = styled.span`
    margin: .2rem;
`

export const Breed = styled.p`
    text-align: start;
    color: var(--text-main-color);
    font-size: .8rem;
    width: auto;
    overflow: hidden;

    &::first-letter {
        text-transform: uppercase;
    }

    @media (max-width: 70rem) {
        max-width: 10rem;
        font-size: .5rem;
    }
`

export const ContentListRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const Time = styled.h3`
    text-align: end;
    color: var(--text-main-color);
    font-size: .9rem;
    padding-right: .4rem;
`

export const Date = styled.h3`
    text-align: end;
    color: var(--text-main-color);
    font-size: .9rem;
    padding-right: .4rem;
`