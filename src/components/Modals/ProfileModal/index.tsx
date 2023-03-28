import * as S from './style'
import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { AuthContext } from '@/contexts/authContext'

const ProfileModal = () => {
    const { user, signOut } = React.useContext(AuthContext)
    
    return (
        <S.Container className='animation-container'>
            <S.Content>
                <S.Section>
                    <S.UserLogo
                        width={30}
                        height={30}
                        alt='user'
                        src={`https://avatars.dicebear.com/api/initials/${user?.email}.svg`} />
                    <S.Text>{user?.username}</S.Text>
                </S.Section>
                <S.Section>
                    <S.Text>{user?.email}</S.Text>
                    <BiLogOut onClick={() => signOut()} />
                </S.Section>
            </S.Content>
        </S.Container>
    )
}

export default ProfileModal;