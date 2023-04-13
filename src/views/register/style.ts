import styled from "styled-components";
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.section`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 100%;
    height: 100vh;

    @media(max-width: 70rem) {
        flex-direction: column;
        min-width: 300px;
    }
`

export const LogoContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    /* height: 100vh; */

    @media(max-width: 70rem) {
        /* height: 30%; */
        width: 100%;
        margin-bottom: .4rem;
    }
`

export const LogoContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    /* margin-bottom: .4rem; */
    /* animation: growAnimation .5s ease-in-out; */
    /* transform-origin: bottom center; */

  @keyframes growAnimation{
    0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
  }

  @media(max-width: 70rem) {
        width: 150px;
        height: 150px;
    }
`

export const Logo = styled(Image)`
    object-fit: contain;
    width: 100%;
    height: 100%;
    /* filter: drop-shadow(0 0 0.75rem rgb(21, 21, 21)); */
`

export const Title = styled.h1`
    color: var(--text-dark-color);
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: .2rem;
`

export const Span = styled.span`
    color: #333;
    font-size: .8rem;
    margin-top: .8rem;

    @media(max-width: 70rem) {
        margin-bottom: .8rem;
        margin-top: .2rem;
    }
`

export const Content = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    height: 100vh;
    background: var(--text-dark-color);
    background: #fb1;
    /* background: #ff6b00; */
    /* border-radius: 0 1.25rem 1.25rem 0; */
    box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.15);

    @media(max-width: 70rem) {
        width: 100%;
        height: 70%;
        margin-top: .4rem;
        border-radius: 4rem 4rem 0 0;
    }
`

export const Info = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 1rem;

    svg{
        width: 1.5rem;
        height: 1.5rem;
        margin: .4rem;
        transition: all .2s;

        &:hover{
            cursor: pointer;
        }
    }
`

export const Text = styled.p`
    color: #333;
    font-size: .9rem;
    margin-bottom: .4rem;
`

export const Login = styled(Link)`
    color: #333;
    font-size: .7rem;
    font-weight: bold;
    transition: all .2s;
    /* text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25); */

    &:hover{
        cursor: pointer;
        color: var(--text-white-color);
         text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
}
`