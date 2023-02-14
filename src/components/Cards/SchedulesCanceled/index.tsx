import React from 'react'
import * as S from './style'
import { FaUserTimes } from 'react-icons/fa'

const SchedulesCanceled = () => {
    return (
        <S.Container>
            <S.Content>
                <FaUserTimes />
                <S.Count>5</S.Count>
            </S.Content>
            <S.Title>Cancelamentos do mês</S.Title>
        </S.Container>
    )
}

export default SchedulesCanceled