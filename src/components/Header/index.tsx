import React from 'react'
import * as S from './style'
import { HeaderProps } from './types'
import { MdPets } from 'react-icons/md'
import Navigation from '../Navigation'

const Header = ({ title }: HeaderProps) => {
    return (
        <S.Header>
            <Navigation />
            <S.Icon>
                <MdPets />
            </S.Icon>
            <S.Title className='animation-container'>{title}</S.Title>
        </S.Header>
    )
}

export default Header