import React from 'react'
import Navbar from '../Navbar'
import { MdPets } from 'react-icons/md'
import * as S from './style'
import Navlink from '../Navlink'

const Header = () => {
    return (
        <S.Container>
            <Navlink href={'/'}><MdPets color='#000' />Your Pet</Navlink>
            <Navbar />
        </S.Container>
    )
}

export default Header