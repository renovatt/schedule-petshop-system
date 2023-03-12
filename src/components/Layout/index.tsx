import React from 'react'
import * as S from './style'
import { parseCookies } from 'nookies';
import Navigation from '../Navigation'

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const { ['@nextauth-token']: token } = parseCookies();
    return (
        <S.Container>
            {token && <Navigation />}
            <S.Main>{children}</S.Main>
        </S.Container>
    )
}

export default Layout