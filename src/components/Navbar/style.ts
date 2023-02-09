import styled from "styled-components";

export const Nav = styled.section`
    position: fixed;
    left: 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-top: 1rem;

    a{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 4rem;
        color: #ed2f5a;
        padding: 1rem;
        transition: all .3s;
        margin: .4rem;

        &:hover{
            background: #ed2f5a;
            color: #fff;
            margin-left: 2rem;
        }

        svg{
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 2rem;
        }
    }
`