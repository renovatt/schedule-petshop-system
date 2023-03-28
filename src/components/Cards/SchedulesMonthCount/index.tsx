import React from 'react'
import * as S from './style'
import { FaUserClock } from 'react-icons/fa'
import { getSchedulesMonthQuantity } from '@/connections'
import { AuthContext } from '@/contexts/authContext'
import { renderScheduleList } from '@/services/schedules'

const SchedulesMonthCount = () => {
    const { isToken } = React.useContext(AuthContext)
    const [schedulesMonthQuantity, setSchedulesMonthQuantity] = React.useState<number>(0);

    async function countSchedules() {
        const { response } = await renderScheduleList(isToken);
        const currentMonthSchedules = await getSchedulesMonthQuantity(response)
        setSchedulesMonthQuantity(currentMonthSchedules);
    }

    React.useEffect(() => {
        countSchedules();
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

export default SchedulesMonthCount;