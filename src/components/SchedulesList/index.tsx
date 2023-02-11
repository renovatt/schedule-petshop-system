import React from 'react'
import * as S from './style'
import { SchedulesListProps } from './types'
import { FaDog } from 'react-icons/fa'
import PetDetails from '../Modals/PetDetails'

const SchedulesList = ({ id, name, pet, sex, age, weight, breed, date, time, client }: SchedulesListProps) => {
  const [isPetModalOpen, setPetModalOpen] = React.useState(false)
  return (
    <>
      {isPetModalOpen && <PetDetails setPetModalOpen={setPetModalOpen} />}
      <S.Container onClick={() => setPetModalOpen(true)}>
        <S.ContentList>
          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={pet}><FaDog /></S.Icon>
              <S.PetName>{pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{time}h</S.Time>
            </S.ContentListRight>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={pet}><FaDog /></S.Icon>
              <S.PetName>{pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{time}h</S.Time>
            </S.ContentListRight>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={pet}><FaDog /></S.Icon>
              <S.PetName>{pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{time}h</S.Time>
            </S.ContentListRight>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={pet}><FaDog /></S.Icon>
              <S.PetName>{pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{time}h</S.Time>
            </S.ContentListRight>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={pet}><FaDog /></S.Icon>
              <S.PetName>{pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{time}h</S.Time>
            </S.ContentListRight>
          </S.List>
        </S.ContentList>
      </S.Container>
    </>
  )
}

export default SchedulesList