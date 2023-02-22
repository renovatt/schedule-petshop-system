import React from 'react'
import * as S from './style'
import { ScheduleFormProps } from '@/components/Forms/ScheduleForm/types'
import { FaDog } from 'react-icons/fa'
import PetModalDetails from '../../Modals/PetModalDetails'

const ScheduleList = ({ ...props }: ScheduleFormProps) => {
  const [isPetModalOpen, setPetModalOpen] = React.useState(false)
  return (
    <>
      {isPetModalOpen && <PetModalDetails setPetModalOpen={setPetModalOpen} petProps={props} />}
      <S.Container onClick={() => setPetModalOpen(true)}>
        <S.ContentList>
          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={props.pet}><FaDog /></S.Icon>
              <S.PetName>{props.pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{props.breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{new Date(props.date).getHours()}:{new Date(props.date).getMinutes()}h</S.Time>
            </S.ContentListRight>
          </S.List>
        </S.ContentList>
      </S.Container>
    </>
  )
}

export default ScheduleList