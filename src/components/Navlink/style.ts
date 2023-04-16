import styled from "styled-components";
import Link from 'next/link'

export const List = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    overflow: hidden;
    transition: all .3s;

    &:hover{
        background-color: var(--primary-background);
    }

    @media (max-width: 70rem){
        width: 3rem;
        border-radius: 50%;

        &:nth-child(1){
            display: none;
        }
    }
`

export const RefLink = styled(Link)`
    display: flex;
    color: var(--text-primary-color);
    width: 100%;
    transition: all .3s;
    font-weight: bold;

    &:hover{
        cursor: pointer;
        color: var(--text-main-color);
        background: var(--primary-background);
    }

    @media (max-width: 70rem){
        align-items: center;
        justify-content: center;
    }
`

export const Icon = styled.span`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 3.75rem;
    height: 3.75rem;
    line-height: 4.375rem;
    text-align: center;

    svg{
        width: 1.50rem;
        height: 1.50rem;

        @media (max-width: 70rem){
            margin-left: .1rem;
        }
    }
`

export const Title = styled.span`
    position: relative;
    display: block;
    padding: 0 .9rem;
    height: 3.75rem;
    line-height: 3.75rem;
    text-align: start;
    white-space: nowrap;
    font-size: .9rem;

    @media (max-width: 70rem){
        display: none;
    }
`