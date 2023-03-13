import React from 'react'
import * as S from './style'

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <S.Container>
            <S.Main>{children}</S.Main>
        </S.Container>
    )
}

export default Layout