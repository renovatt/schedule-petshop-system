import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding: 0 3.5rem;
    background: #ff6b00;
    /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15); */

    @media (max-width: 70rem) {
        padding: 0;
    }
`

export const Title = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 1rem;
`

export const Icon = styled.span`
    position: relative;
    display: block;
    text-align: center;
    min-width: 3.75rem;
    line-height: 4.375rem;
    height: 3.75rem;

    &:hover{
        cursor: pointer;
    }

    svg{
        color: #fff;
        margin-top: .4rem;
        font-size: 2.75rem;
        padding: 0  .4rem;
    }
`