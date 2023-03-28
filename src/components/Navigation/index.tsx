import React from 'react'
import * as S from './style'
import Navlink from '../Navlink'
import { BsGithub } from 'react-icons/bs'
import { FaAddressCard, FaBone } from 'react-icons/fa'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { MdSpaceDashboard } from 'react-icons/md'
import { AuthContext } from '../../contexts/authContext'
import { ListContext } from '../../contexts/listContext'
import { AiFillSchedule, AiFillLinkedin, AiFillSetting } from 'react-icons/ai'

const Navigation = () => {
    const [isActive, setIsActive] = React.useState(false)
    const { signOut } = React.useContext(AuthContext)
    const { clear } = React.useContext(ListContext)

    return (
        <S.Navigation active={isActive}>
            <S.ListContainer>
                <Navlink href={'/'} svg={<FaBone />} text={"Cute Pet"} />
                <Navlink href={'/dashboard'} svg={<MdSpaceDashboard />} text={"Dashboard"} />
                <Navlink href={'/schedules'} svg={<AiFillSchedule />} text={"Agendamentos"} />
                <Navlink href={'/client-register'} svg={<FaAddressCard />} text={"Cadastro"} />
                <Navlink href={'/preferences'} svg={<AiFillSetting />} text={"Preferências"} />
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
                    <S.Icon onClick={() => { signOut(); clear(); }}><RiLogoutCircleLine /></S.Icon>
                </S.LogoutLink>
            </S.Logout>

            <S.Toggle className={isActive ? 'active' : ''} onClick={() => setIsActive(!isActive)}></S.Toggle>
        </S.Navigation>
    )
}

export default Navigation;