import React from 'react'
import * as S from './style'
import { FaUserClock } from 'react-icons/fa'

const SchedulesCount = () => {
    return (
        <S.Container>
            <S.Content>
                <FaUserClock />
                <S.Count>62</S.Count>
            </S.Content>
            <S.Title>Agendamentos do mês</S.Title>
        </S.Container>
    )
}

export default SchedulesCount