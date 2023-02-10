import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #888;
`

export const ContentList = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
    width: 80%;
    height: auto;
    max-height: 30rem;
    /* overflow-y: scroll; */
    overflow-x: hidden;
    padding: .4rem;
    border-radius: .4rem;
    background: #24c2ca;
`

export const List = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    color: #000;
    font-weight: bold;
    margin: .4rem;
    border-radius: .4rem;
    background: #fff;
`