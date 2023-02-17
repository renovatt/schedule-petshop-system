import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
    min-height: 5rem;
    border-radius: .8rem;
    overflow: hidden;
`

export const Table = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column-reverse;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 95%;
    
    ::-webkit-scrollbar-track{
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb{
        background: transparent;
    }
`