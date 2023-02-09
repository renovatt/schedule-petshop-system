import React from 'react'
import Navlink from '../Navlink'
import { MdSpaceDashboard } from 'react-icons/md'
import { FaAddressCard } from 'react-icons/fa'
import { AiFillSchedule } from 'react-icons/ai'
import * as S from './style'

const Navbar = () => {
    return (
        <S.Nav>
            <Navlink href={'/dashboard'}><MdSpaceDashboard/>Dashboard</Navlink>
            <Navlink href={'/schedules'}><AiFillSchedule/>Agendamentos</Navlink>
            <Navlink href={'/register'}><FaAddressCard/>Cadastro</Navlink>
        </S.Nav >
    )
}

export default Navbar