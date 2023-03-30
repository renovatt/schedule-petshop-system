import * as S from './style'
import React from 'react'
import { toast } from 'react-toastify'
import { DeleteModalProps } from './types'
import { CgCloseR } from 'react-icons/cg'
import { deleteAllCanceledSchedules } from '@/services/canceled'

const DeleteCanceledModal = ({ isToken, setCanceledModalOpen }: DeleteModalProps) => {

    const deleteCanceledSchedules = async () => {
        const { response, error } = await deleteAllCanceledSchedules(isToken)
        if (response) {
            toast.success('Todos os agendamentos cancelados foram excluídos com sucesso.')
        } else if (error) {
            toast.error(error.toString())
        }
        setCanceledModalOpen(false)
    }

    return (
        <S.Container className='animation-container'>
            <S.Content>
                <S.Text>Todos os agendamentos que estão como cancelados vão ser excluídos, não se preocupe, todos os outros dados permaneceram salvos, isso serve apenas para liberar um pouco mais de espaço no banco de dados.</S.Text>
                <S.Icon>
                    <CgCloseR onClick={() => setCanceledModalOpen(false)} />
                </S.Icon>
                <S.DeleteButton onClick={deleteCanceledSchedules}>Excluir</S.DeleteButton>
            </S.Content>
        </S.Container>
    )
}

export default DeleteCanceledModal;