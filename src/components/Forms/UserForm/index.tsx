import React from 'react'
import * as S from './style'
import { toast } from 'react-toastify'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserFormProps } from '@/components/Forms/LoginForm/type'
import DeleteAccountModal from '@/components/Modals/DeleteAccountModal'
import { AuthContext } from '@/contexts/authContext'
import { updatingUserFormToDatabase } from '@/services/user'
import DeleteCanceledModal from '@/components/Modals/DeleteCanceledModal'

const UserForm = () => {
    const { user, isToken } = React.useContext(AuthContext)
    const [isDeleteModalOpen, setDeleteModalOpen] = React.useState(false)
    const [isCanceledModalOpen, setCanceledModalOpen] = React.useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<UserFormProps>();

    const onSubmit: SubmitHandler<UserFormProps> = async data => {
        const { response, error } = await updatingUserFormToDatabase(user?.id as string, data, isToken)
        if (response) {
            toast.success('Seus dados foram atualizados com sucesso!')
        } else if (error) {
            toast.error(error.toString())
        }
        reset()
    }

    return (
        <>
            {isDeleteModalOpen &&
                <DeleteAccountModal userId={user?.id as string} setDeleteModalOpen={setDeleteModalOpen} />}
                
            {isCanceledModalOpen &&
                <DeleteCanceledModal isToken={isToken} setCanceledModalOpen={setCanceledModalOpen} />}

            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.Label>
                    <S.Span>Nome:</S.Span>
                    <S.Input type="text"
                        maxLength={40}
                        {...register("username",
                            {
                                required: "*Campo obrigatório.",
                                maxLength: {
                                    value: 41,
                                    message: "*Capacidade máxima de 40 caracteres."
                                }
                            })
                        }
                        placeholder='Nome do usuário' />
                    <S.InputAlert>{errors.username?.message}</S.InputAlert>
                </S.Label>

                <S.Label>
                    <S.Span>E-mail:</S.Span>
                    <S.Input type="email"
                        {...register("email",
                            {
                                required: "*Campo obrigatório.",
                                maxLength: {
                                    value: 40,
                                    message: "*Capacidade de máxima 40 caracteres."
                                }
                            })
                        }
                        placeholder='e-mail' />
                    <S.InputAlert>{errors.email?.message}</S.InputAlert>
                </S.Label>

                <S.Label>
                    <S.Span>Senha:</S.Span>
                    <S.Input type="password"
                        {...register("password",
                            {
                                required: "*Campo obrigatório.",
                                maxLength: {
                                    value: 40,
                                    message: "*Capacidade máxima de 40 caracteres."
                                }
                            })
                        }
                        placeholder='Senha' />
                    <S.InputAlert>{errors.password?.message}</S.InputAlert>
                </S.Label>

                <S.SaveButton>Salvar dados</S.SaveButton>
            </S.Form>
            <S.DeleteButton onClick={() => setDeleteModalOpen(true)}>Excuir conta</S.DeleteButton>
            <S.DeleteButton onClick={() => setCanceledModalOpen(true)}>Liberar espaço</S.DeleteButton>
        </>
    )
}

export default UserForm