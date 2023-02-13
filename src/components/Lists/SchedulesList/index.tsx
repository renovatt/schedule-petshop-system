import React from 'react'
import * as S from './style'
import { SchedulesListProps } from './types'
import { FaDog } from 'react-icons/fa'
import PetDetails from '../../Modals/PetDetails'

const ScheduleList = ({ ...props }: SchedulesListProps) => {
  const [isPetModalOpen, setPetModalOpen] = React.useState(false)
  return (
    <>
      {isPetModalOpen && <PetDetails setPetModalOpen={setPetModalOpen} petProps={props} />}
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
              <S.Time>{props.time}h</S.Time>
            </S.ContentListRight>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={props.pet}><FaDog /></S.Icon>
              <S.PetName>{props.pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{props.breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{props.time}h</S.Time>
            </S.ContentListRight>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={props.pet}><FaDog /></S.Icon>
              <S.PetName>{props.pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{props.breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{props.time}h</S.Time>
            </S.ContentListRight>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={props.pet}><FaDog /></S.Icon>
              <S.PetName>{props.pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{props.breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{props.time}h</S.Time>
            </S.ContentListRight>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={props.pet}><FaDog /></S.Icon>
              <S.PetName>{props.pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{props.breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{props.time}h</S.Time>
            </S.ContentListRight>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={props.pet}><FaDog /></S.Icon>
              <S.PetName>{props.pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{props.breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{props.time}h</S.Time>
            </S.ContentListRight>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={props.pet}><FaDog /></S.Icon>
              <S.PetName>{props.pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{props.breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{props.time}h</S.Time>
            </S.ContentListRight>
          </S.List>

         <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={props.pet}><FaDog /></S.Icon>
              <S.PetName>{props.pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{props.breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{props.time}h</S.Time>
            </S.ContentListRight>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={props.pet}><FaDog /></S.Icon>
              <S.PetName>{props.pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{props.breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{props.time}h</S.Time>
            </S.ContentListRight>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.Icon color={props.pet}><FaDog /></S.Icon>
              <S.PetName>{props.pet}</S.PetName>
              <S.Span>-</S.Span>
              <S.Breed>{props.breed}</S.Breed>
            </S.ContentListLeft>
            <S.ContentListRight>
              <S.Time>{props.time}h</S.Time>
            </S.ContentListRight>
          </S.List>
        </S.ContentList>
      </S.Container>
    </>
  )
}

export default ScheduleList