import styled from "styled-components";
import Link from 'next/link'

type ContainerProps = {
    active: boolean;
}

export const Navigation = styled.nav<ContainerProps>`
    z-index: 999;
    position: fixed;
    inset: 0;
    height: 100%;
    overflow: hidden;
    transition: all .5s;
    background-color: #fff;
    box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.25);
    width: ${(props) => props.active ? '15rem' : '3rem'};
    /* border-left: 0.625rem solid transparent; */
    /* background-color: ${(props) => props.active ? '#fff' : 'transparent'}; */
    /* border-top-right-radius: ${(props) => props.active ? '.4rem' : '0'}; */
    /* border-bottom-right-radius: ${(props) => props.active ? '.4rem' : '0'}; */
    /* box-shadow: ${(props) => props.active ? "15px 15px 25px rgba(0, 0, 0, 0.25)" : "none"}; */
    
    @media (max-width: 70rem) {
        inset: initial;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5rem;
        width: 100%;
        background: #fff;
        border-radius: 3rem 3rem 0 0;
        box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);
    }
`

export const ListContainer = styled.ul`
    position: absolute;
    top: 5rem;
    left: 0;
    width: 100%;

    svg{
        margin-left: -0.75rem;
    }

    @media (max-width: 70rem){
        position: static;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
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
        font-size: 1.50rem;
    }
`

export const GitHub = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 15px;
    right: 190px;
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
    color: #101010;
    width: 100%;
    margin-left: -.4rem;
    transition: all .3s;

    &:hover{
        cursor: pointer;
        color: #ff6b00;
    }
`

export const Linkedin = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 15px;
    right: 150px;
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
    color: #101010;
    width: 100%;
    margin-left: -.4rem;
    transition: all .3s;

    &:hover{
        cursor: pointer;
        color: #ff6b00;
    }
`

export const Logout = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 85px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: all .3s;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.45);

    @media (max-width: 70rem){
        display: none;
    }

    &:hover{
        background-color: #ff6b00;
    }
`

export const LogoutLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff6b00;
    width: 100%;
    margin-left: -.3rem;
    transition: all .3s;
    transform: rotate(90deg);

    svg{
        width: 1.50rem;
        height: 1.50rem;
    }

    &:hover{
        cursor: pointer;
        color: #fff;
    }
`

export const Toggle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 30px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.45);

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
        width: 20px;
        height: 3px;
        border-radius: 3px;
        transform: translateY(-5px);
        transition: 1s;
        background: #ff6b00;
    }

    ::after{
        content: '';
        position: absolute;
        width: 20px;
        height: 3px;
        border-radius: 3px;
        transform: translateY(5px);
        transition: 1s;
        background: #ff6b00;
    }

    @media (max-width: 70rem){
        display: none;
    }
`