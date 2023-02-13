import React from 'react'
import * as S from './style'
import { ClientListProps } from './types'
import { ImUser } from 'react-icons/im'
import { IoMdOpen } from 'react-icons/io'
import ClientDetails from '@/components/Modals/ClientDetails'

const ClientList = ({ ...props }: ClientListProps) => {
  const [isClientModalOpen, setClientModalOpen] = React.useState(false)
  return (
    <>
      {isClientModalOpen && <ClientDetails setPetModalOpen={setClientModalOpen} clientProps={props} />}
      <S.Container onClick={() => setClientModalOpen(true)}>
        <S.ContentList>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.UserIcon color={props.sex}><ImUser /></S.UserIcon>
              <S.ClientName>{props.name}</S.ClientName>
              <IoMdOpen />
            </S.ContentListLeft>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.UserIcon color={props.sex}><ImUser /></S.UserIcon>
              <S.ClientName>{props.name}</S.ClientName>
              <IoMdOpen />
            </S.ContentListLeft>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.UserIcon color={props.sex}><ImUser /></S.UserIcon>
              <S.ClientName>{props.name}</S.ClientName>
              <IoMdOpen />
            </S.ContentListLeft>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.UserIcon color={props.sex}><ImUser /></S.UserIcon>
              <S.ClientName>{props.name}</S.ClientName>
              <IoMdOpen />
            </S.ContentListLeft>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.UserIcon color={props.sex}><ImUser /></S.UserIcon>
              <S.ClientName>{props.name}</S.ClientName>
              <IoMdOpen />
            </S.ContentListLeft>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.UserIcon color={props.sex}><ImUser /></S.UserIcon>
              <S.ClientName>{props.name}</S.ClientName>
              <IoMdOpen />
            </S.ContentListLeft>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.UserIcon color={props.sex}><ImUser /></S.UserIcon>
              <S.ClientName>{props.name}</S.ClientName>
              <IoMdOpen />
            </S.ContentListLeft>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.UserIcon color={props.sex}><ImUser /></S.UserIcon>
              <S.ClientName>{props.name}</S.ClientName>
              <IoMdOpen />
            </S.ContentListLeft>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.UserIcon color={props.sex}><ImUser /></S.UserIcon>
              <S.ClientName>{props.name}</S.ClientName>
              <IoMdOpen />
            </S.ContentListLeft>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.UserIcon color={props.sex}><ImUser /></S.UserIcon>
              <S.ClientName>{props.name}</S.ClientName>
              <IoMdOpen />
            </S.ContentListLeft>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.UserIcon color={props.sex}><ImUser /></S.UserIcon>
              <S.ClientName>{props.name}</S.ClientName>
              <IoMdOpen />
            </S.ContentListLeft>
          </S.List>

          <S.List className='animation-container'>
            <S.ContentListLeft>
              <S.UserIcon color={props.sex}><ImUser /></S.UserIcon>
              <S.ClientName>{props.name}</S.ClientName>
              <IoMdOpen />
            </S.ContentListLeft>
          </S.List>

        </S.ContentList>
      </S.Container>
    </>
  )
}

export default ClientList