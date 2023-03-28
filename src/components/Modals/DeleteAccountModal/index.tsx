import * as S from './style'
import React from 'react'
import { AuthContext } from '@/contexts/authContext'
import { toast } from 'react-toastify'
import { DeleteModalProps } from './types'
import { CgCloseR } from 'react-icons/cg'
import { deletingUserFormToDatabase } from '@/services/user'

const DeleteAccountModal = ({ userId, setDeleteModalOpen }: DeleteModalProps) => {
    const { signOut, isToken } = React.useContext(AuthContext)

    const deleteUser = async () => {
        const { response, error } = await deletingUserFormToDatabase(userId, isToken)
        if (response) {
            toast.success('Usuário deletado com sucesso!')
        } else if (error) {
            toast.error(error.toString())
        }
        signOut()
        setDeleteModalOpen(false)
    }
    
    return (
        <S.Container className='animation-container'>
            <S.Content>
                <S.Text>Todos os dados da sua conta serão excluídos, tem certeza?</S.Text>
                <S.Icon>
                    <CgCloseR onClick={() => setDeleteModalOpen(false)} />
                </S.Icon>
                <S.DeleteButton onClick={deleteUser}>Excuir conta</S.DeleteButton>
            </S.Content>
        </S.Container>
    )
}

export default DeleteAccountModal;