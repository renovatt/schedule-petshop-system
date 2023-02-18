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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 3rem;
    margin: .2rem;
    border-radius: .4rem;
    color: #fff;
    background: #101010;
    transition: all .3s;
    
    &:hover{
        cursor: pointer;
        margin-left: 1rem;
    }
`

export const ContentListLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 90%;

    svg{
        width: 2.5rem;
        height: 2.5rem;
        padding: .4rem;
    }
`

export const UserIcon = styled.div`
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

export const ClientName = styled.h3`
    text-align: start;
    color: #fff;
    font-size: .8rem;
    width: 100%;
    &::first-letter {
        text-transform: uppercase;
    }
`