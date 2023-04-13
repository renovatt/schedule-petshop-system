import styled from "styled-components";
import Image from "next/image";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 3rem;
    right: 4rem;
    width: 15rem;
    height: 5rem;
    z-index: 1;
    border-radius: .4rem;
    /* background: rgba(0, 0, 0, .8); */
    background-color: var(--text-dark-color);

    @media (max-width: 70rem) {
        right: .5rem;
    }
`

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: .4rem;
    /* backdrop-filter: blur(20px); */
    /* background-color: rgba(51, 42, 42, 0.064); */
`

export const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding: 0 .8rem;

    svg{
        width: 1.5rem;
        height: 1.5rem;
        color: var(--text-white-color);
        transition: all .3s;

        &:hover{
            cursor: pointer;
            color: var(--text-orange-color);
        }
    }
`

export const UserLogo = styled(Image)`
    color: var(--text-white-color);
    margin-top: .6rem;
    border-radius: 50%;
    object-fit: cover;

    &:hover{
        opacity: .9;
    }
`
export const Text = styled.p`
    font-size: .8rem;
    color: var(--text-white-color);
    font-weight: bold;
    text-align: center;
`