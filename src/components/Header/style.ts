import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding: 0 6rem;
    background: #ff6b00;
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);

    @media (max-width: 70rem) {
        padding: 0;
    }
`

export const Title = styled.h1`
    color: #fff;
    text-align: center;
    margin-right: 1rem;

    @media (max-width: 70rem) {
        margin: 1rem;
        font-size: 1rem;
    }
`

export const Icon = styled.span`
    position: relative;
    display: block;
    min-width: 3.75rem;
    height: 3.75rem;
    line-height: 4.375rem;
    text-align: center;

    svg{
        margin-top: .4rem;
        font-size: 2.75rem;
        color: #fff;
        padding: 0  .4rem;
    }
`