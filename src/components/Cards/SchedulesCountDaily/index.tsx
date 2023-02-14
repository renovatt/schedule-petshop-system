import React from 'react'
import * as S from './style'
import { FaUserClock } from 'react-icons/fa'

const SchedulesCountDaily = () => {
    return (
        <S.Container>
            <S.Content>
                <FaUserClock />
                <S.Count>8</S.Count>
            </S.Content>
            <S.Title>Agendamentos do dia</S.Title>
        </S.Container>
    )
}

export default SchedulesCountDaily