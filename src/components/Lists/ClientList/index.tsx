import React from 'react'
import * as S from './style'
import { ImUser } from 'react-icons/im'
import { IoMdOpen } from 'react-icons/io'
import ClientModalDetails from '@/components/Modals/ClientModalDetails'
import { ClientFormProps } from '@/components/Forms/ClientForm/types'

const ClientList = ({ ...props }: ClientFormProps) => {
  const [isClientModalOpen, setClientModalOpen] = React.useState(false)
  return (
    <>
      {isClientModalOpen && <ClientModalDetails setClientModalOpen={setClientModalOpen} clientProps={props} />}
      <S.Container onClick={() => setClientModalOpen(true)}>
        <S.ContentList>
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