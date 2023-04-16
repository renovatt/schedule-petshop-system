import styled from "styled-components"
import Image from 'next/image'

export const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding: 0 3.5rem;
    background: var(--primary-background);
    /* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15); */

    @media (max-width: 70rem) {
        padding: 0 .5rem;
    }
`

export const Title = styled.h1`
    color: var(--text-main-color);
    text-align: center;
    font-size: 1rem;
`

export const Icon = styled.span`
    position: relative;
    display: block;
    text-align: center;
    min-width: 3.75rem;
    height: 3.75rem;
    line-height: 4.375rem;

    &:hover{
        cursor: pointer;
    }

    svg{
        color: var(--svg-secondary-color);
        margin-top: .4rem;
        font-size: 2.75rem;
        padding: 0  .4rem;
    }
`

export const UserLogo = styled(Image)`
    color: var(--text-main-color);
    margin-top: .8rem;
    border-radius: 50%;
    object-fit: cover;

    &:hover{
        opacity: .9;
    }
`