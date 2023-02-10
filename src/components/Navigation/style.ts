import styled from "styled-components";
import Link from 'next/link'

type ContainerProps = {
    active: boolean;
  } 

export const Navigation = styled.nav<ContainerProps>`
    z-index: 999;
    position: fixed;
    inset: 0;
    overflow: hidden;
    transition: all .5s;
    background: #fff;
    box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.25);
    border-left: 0.625rem solid #fff;
    width: ${(props) => props.active ? '18rem' : '5rem'};
    border-bottom-right-radius: ${(props) => props.active ? '3rem' : '0'};
    border-top-right-radius: ${(props) => props.active ? '3rem' : '0'};

    @media (max-width: 70rem) {
        inset: initial;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5rem;
        width: 100%;
        border-radius: 3rem 3rem 0 0;
    }
`

export const ListContainer = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    @media (max-width: 70rem){
        position: static;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`

export const List = styled.li`
    position: relative;
    width: 100%;
    transition: all .3s;
    /* border-top-left-radius: 1.875rem; */
    border-bottom-left-radius: 1.875rem;
    overflow: hidden;

    &:hover{
        background: #ed2f5a;
    }

    &:nth-child(1){
        top: 1.25rem;
        margin-bottom: 2.5rem;
        background: none;

        @media (max-width: 70rem){
        display: none;
        }
    }

    &:hover:nth-child(1){
        /* margin-left: -1rem; */
        
        @media (max-width: 70rem){
            margin-left: 0;
        }

        &:hover{
        background: #ed2f5a;
    }
    }

    @media (max-width: 70rem){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;

        &:hover{
        background: none;
    }
    }
`

export const NavLink = styled(Link)`
    display: flex;
    color: #ed2f5a;
    width: 100%;
    transition: all .3s;
    font-weight: bold;

    &:hover{
        cursor: pointer;
        margin-left: 1rem;
        color: #fff;
        background: #ed2f5a;

        @media (max-width: 70rem){
            margin-left: 0;
        }
    }

    @media (max-width: 70rem){
        align-items: center;
        justify-content: center;
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
        font-size: 1.75rem;
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

    @media (max-width: 70rem){
        display: none;
    }
`

export const GitHub = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 15px;
    right: 220px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all .3s;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);

    @media (max-width: 70rem){
        display: none;
    }
`

export const GitHubLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ed2f5a;
    width: 100%;
    margin-left: -.4rem;
    transition: all .3s;

    &:hover{
        cursor: pointer;
        color: #000;
    }
`

export const Linkedin = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 15px;
    right: 180px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all .3s;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);

    @media (max-width: 70rem){
        display: none;
    }
`

export const LinkedinLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ed2f5a;
    width: 100%;
    margin-left: -.4rem;
    transition: all .3s;

    &:hover{
        cursor: pointer;
        color: #000;
    }
`

export const Logout = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 75px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all .3s;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);

    @media (max-width: 70rem){
        display: none;
    }
`

export const LogoutLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ed2f5a;
    width: 100%;
    margin-left: -.4rem;
    transform: rotate(90deg);
    transition: all .3s;

    &:hover{
        cursor: pointer;
        color: #000;
    }
`

export const Toggle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.55);

    &:hover{
        cursor: pointer;
    }

    &.active{
        ::after{
            transform: translateY(0px) rotate(225deg);
        }

        ::before{
            transform: translateY(0px) rotate(-405deg);
        }
    }

    ::before{
        content: '';
        position: absolute;
        width: 26px;
        height: 3px;
        border-radius: 3px;
        transform: translateY(-5px);
        transition: 1s;
        background: #ed2f5a;
    }

    ::after{
        content: '';
        position: absolute;
        width: 26px;
        height: 3px;
        border-radius: 3px;
        transform: translateY(5px);
        transition: 1s;
        background: #ed2f5a;
    }

    @media (max-width: 70rem){
        display: none;
    }
`