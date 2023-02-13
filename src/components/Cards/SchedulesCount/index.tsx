import React from 'react'
import * as S from './style'
import { FaUserClock } from 'react-icons/fa'

const SchedulesCard = () => {
    return (
        <S.Container>
            <S.Content>
                <FaUserClock />
                <S.Count>32</S.Count>
            </S.Content>
            <S.Title>Agendamentos do mês atual</S.Title>
        </S.Container>
    )
}

export default SchedulesCard