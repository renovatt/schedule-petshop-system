import React from 'react'
import ScheduleForm from '../Forms/ScheduleForm'
import SchedulesList from '../SchedulesList'
import * as S from './style'

const ScheduleCreate = () => {
  return (
    <S.Container>
      <ScheduleForm />
      <div>
        <SchedulesList />
      </div>
    </S.Container>
  )
}

export default ScheduleCreate