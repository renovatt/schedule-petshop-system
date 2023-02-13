import React from 'react'
import ScheduleList from '../../Lists/SchedulesList'
import * as S from '../ClientTable/style'

const ScheduleTable = () => {
    let appointmentDate = new Date("2023-02-11T10:00:00");
    return (
        <S.Container>
            <ScheduleList
                key={''}
                id=''
                svg=''
                name='Will'
                pet='Jubileu'
                age='2'
                sex='Macho'
                breed='Rasky'
                weight='2'
                client
                time='12:25'
                date={appointmentDate} />
        </S.Container>
    )
}

export default ScheduleTable