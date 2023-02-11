import React from 'react'
import SchedulesList from '../SchedulesList'
import * as S from './style'

const Table = () => {
    let appointmentDate = new Date("2023-02-11T10:00:00");
    return (
        <S.Container>
            <SchedulesList
                key={''}
                id=''
                svg=''
                name='Will'
                pet='Jubileu'
                age='2'
                sex='M'
                breed='Rasky'
                weight='2kg'
                client
                time='12:23'
                date={appointmentDate} />
        </S.Container>
    )
}

export default Table