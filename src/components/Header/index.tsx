import React from 'react'
import * as S from './style'
import { HeaderProps } from './types'
import { MdPets } from 'react-icons/md'
import { FaBone } from 'react-icons/fa'

const Header = ({ title }: HeaderProps) => {
    return (
        <S.Header>
            <S.Icon>
                <MdPets />
            </S.Icon>
            <S.Title className='animation-container'>{title}</S.Title>
        </S.Header>
    )
}

export default Header