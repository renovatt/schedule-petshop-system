import React from 'react'
import * as S from './style'
import { toast } from 'react-toastify'
import { parseCookies } from 'nookies'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserFormProps } from '@/components/Forms/LoginForm/type'
import { getUserIdFromToken, updatingUserFormToDatabase } from '@/services'
import DeleteAccountModal from '@/components/Modals/DeleteAccountModal'

const UserForm = () => {
    const { ['@nextauth-token']: token } = parseCookies();
    const userId = getUserIdFromToken(token)
    const [isDeleteModalOpen, setDeleteModalOpen] = React.useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<UserFormProps>();

    const onSubmit: SubmitHandler<UserFormProps> = async data => {
        const { response, error } = await updatingUserFormToDatabase(userId as string, data)
        if (response) {
            toast.success('Seus dados foram atualizados com sucesso!')
        } else if (error) {
            toast.error(error.toString())
        }
        reset()
    }

    return (
        <>
            {isDeleteModalOpen && <DeleteAccountModal userId={userId as string} setDeleteModalOpen={setDeleteModalOpen} />}
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.Label>
                    <S.Span>Nome:</S.Span>
                    <S.Input type="text"
                        maxLength={40}
                        {...register("username",
                            {
                                required: true,
                                maxLength: {
                                    value: 39,
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
                                required: true,
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
                                required: true,
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
        </>
    )
}

export default UserForm