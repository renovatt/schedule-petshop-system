import React from 'react'
import * as S from './style'
import { GiProgression } from 'react-icons/gi'

const Goal = () => {
    return (
        <S.Container>
            <S.Content>
                <GiProgression />
                <S.Title>Meta do mês</S.Title>
            </S.Content>
            <S.ContentBar>
                <S.ProgressBar goal={60}></S.ProgressBar>
            </S.ContentBar>
        </S.Container>
    )
}

export default Goal