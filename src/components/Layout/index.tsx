import React from 'react'
import Header from '../Header'
import * as S from './style'

const Layout = ({ children }: any) => {
    return (
        <S.Container>
            <Header />
            <S.Main>{children}</S.Main>
        </S.Container>
    )
}

export default Layout