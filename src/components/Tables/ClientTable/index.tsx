import ClientList from '@/components/Lists/ClientList';
import React from 'react'
import * as S from './style'

const ClientTable = () => {
    return (
        <S.Container>
            <ClientList
                key={''}
                id=''
                svg=''
                name='Marcos Aurélio'
                age='32'
                sex='Masculino'
                adress='Rua Dona Maria'
                number='77'
                neighborhood='Parangolé'
                city='Uberlândia'
                contact='(99) 99999-9999' />
        </S.Container>
    )
}

export default ClientTable