import React from 'react'
import * as S from './style'
import { HeaderProps } from './types'

const Header = ({ title }: HeaderProps) => {
    return (
        <S.Header>
            <S.Title>{title}</S.Title>
        </S.Header>
    )
}

export default Header