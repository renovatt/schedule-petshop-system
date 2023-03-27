import React from 'react'
import * as S from './style'
import { FaUserClock } from 'react-icons/fa'
import { renderScheduleList } from '@/services'
import { getSchedulesMonthQuantity } from '@/connections'
import { AuthContext } from '@/components/contexts/authContext'

const SchedulesMonthCount = () => {
    const { isToken } = React.useContext(AuthContext)
    const [schedulesMonthQuantity, setSchedulesMonthQuantity] = React.useState<number>(0);
    React.useEffect(() => {
        async function loadSchedules() {
            const { response } = await renderScheduleList(isToken);
            const currentMonthSchedules = await getSchedulesMonthQuantity(response)
            setSchedulesMonthQuantity(currentMonthSchedules);
        }
        loadSchedules();
    }, []);
    return (
        <S.Container>
            <S.Content>
                <FaUserClock />
                <S.Count>{schedulesMonthQuantity}</S.Count>
            </S.Content>
            <S.Title>Agendamentos do mês</S.Title>
        </S.Container>
    )
}

export default SchedulesMonthCount