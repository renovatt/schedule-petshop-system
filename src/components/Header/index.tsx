import React from 'react'
import * as S from './style'
import { HeaderProps } from './types'
import { FaUserCircle } from 'react-icons/fa'
import Navigation from '../Navigation'

const Header = ({ title }: HeaderProps) => {
    return (
        <S.Header>
            <Navigation />
            <S.Title className='animation-container'>{title}</S.Title>
            <S.Icon>
                <FaUserCircle />
            </S.Icon>
        </S.Header>
    )
}

export default Header