import React from 'react'
import * as S from './style'
import { HeaderProps } from './types'
import Navigation from '../Navigation'
import ProfileModal from '../Modals/ProfileModal'
import { AuthContext } from '../../contexts/authContext'
import { FaUserCircle } from 'react-icons/fa'

const Header = ({ title }: HeaderProps) => {
    const { user } = React.useContext(AuthContext)
    const [isProfileOpen, setProfileOpen] = React.useState(false)
    
    function handleLoad(event: React.SyntheticEvent<HTMLImageElement>): void {
        const target = event.target as HTMLImageElement;
        target.style.opacity = "1";
    }
    return (
        <>
            {isProfileOpen && <ProfileModal />}
            <S.Header>
                <Navigation />
                <S.Title className='animation-container'>{title}</S.Title>
                <S.Icon>
                    {user?.email ? (
                        <S.UserLogo
                            onLoad={handleLoad}
                            width={35}
                            height={35}
                            alt='user'
                            priority={true}
                            src={`https://avatars.dicebear.com/api/initials/${user?.email}.svg`}
                            onClick={() => setProfileOpen(!isProfileOpen)} />
                    ) : <FaUserCircle />}

                </S.Icon>
            </S.Header>
        </>
    )
}

export default Header