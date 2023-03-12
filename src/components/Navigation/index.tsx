import React from 'react'
import * as S from './style'
import { BsGithub } from 'react-icons/bs'
import { FaAddressCard, FaBone } from 'react-icons/fa'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { BiBone } from 'react-icons/bi'
import { MdSpaceDashboard } from 'react-icons/md'
import { AiFillSchedule, AiFillLinkedin } from 'react-icons/ai'
import { AuthContext } from '../contexts/authContext'

const Navigation = () => {
    const [isActive, setIsActive] = React.useState(false)
    const { signOut } = React.useContext(AuthContext)
    return (
        <S.Navigation active={isActive}>
            <S.ListContainer>
                <S.List>
                    <S.NavLink href='/'>
                        <S.Icon><BiBone /></S.Icon>
                        <S.Title>CutePet</S.Title>
                    </S.NavLink>
                </S.List>

                <S.List>
                    <S.NavLink href='/dashboard'>
                        <S.Icon><MdSpaceDashboard /></S.Icon>
                        <S.Title>Dashboard</S.Title>
                    </S.NavLink>
                </S.List>

                <S.List>
                    <S.NavLink href='/schedules'>
                        <S.Icon><AiFillSchedule /></S.Icon>
                        <S.Title>Agendamentos</S.Title>
                    </S.NavLink>
                </S.List>

                <S.List>
                    <S.NavLink href='/register'>
                        <S.Icon><FaAddressCard /></S.Icon>
                        <S.Title>Cadastro</S.Title>
                    </S.NavLink>
                </S.List>
            </S.ListContainer>

            <S.GitHub>
                <S.GitHubLink
                    href="https://github.com/renovatt" target="_blank">
                    <S.Icon><BsGithub /></S.Icon>
                </S.GitHubLink>
            </S.GitHub>

            <S.Linkedin>
                <S.LinkedinLink
                    href="https://www.linkedin.com/in/renovatt/" target="_blank">
                    <S.Icon><AiFillLinkedin /></S.Icon>
                </S.LinkedinLink>
            </S.Linkedin>

            <S.Logout>
                <S.LogoutLink href='/'>
                    <S.Icon onClick={() => signOut()}><RiLogoutCircleLine /></S.Icon>
                </S.LogoutLink>
            </S.Logout>

            <S.Toggle
                className={isActive ? 'active' : ''}
                onClick={() => setIsActive(!isActive)}>
            </S.Toggle>
        </S.Navigation>
    )
}

export default Navigation;