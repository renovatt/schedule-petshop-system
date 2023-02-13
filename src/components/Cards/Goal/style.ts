import styled from "styled-components";

type GoalProps={
        goal: number
}

export const Container = styled.section`
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
        background: #fff;
        height: 8rem;
        width: 15rem;
        border-radius: .8rem;
        margin: .4rem;
        padding: .8rem;
        box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    padding: .8rem;

    svg{
           width: 2.5rem;
           height: 2.5rem;
        }
`

export const Title = styled.h5``


export const ContentBar = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .2rem;
    width: 100%;
    height: .5rem;
    border-radius: .25rem;
    background: #555;
    overflow: hidden;
`

export const ProgressBar = styled.div<GoalProps>`
    height: .5rem;
    border-radius: .25rem;
    animation: statAnimation 2s forwards;
    transform: translate3d(-100%, 0, 0);
    width: ${(props) =>
        props.goal >= 100 ? "100%" : `${props.goal}%`};
    background: ${(props) =>
        (props.goal >= 50 ? '#00ff08' : '#ff0000')};
    @keyframes statAnimation {
        to{
            transform: initial;
        }
    }
`