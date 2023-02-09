import React from 'react'
import Navigation from '../Navigation'
import * as S from './style'

const Layout = ({ children }: any) => {
    return (
        <S.Container>
            <Navigation />
            <S.Main>{children}</S.Main>
        </S.Container>
    )
}

export default Layout