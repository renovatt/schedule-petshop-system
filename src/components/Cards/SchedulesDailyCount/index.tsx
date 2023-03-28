import React from 'react'
import * as S from './style'
import { FaUserClock } from 'react-icons/fa'
import { getSchedulesDailyQuantity } from '@/connections';
import { AuthContext } from '@/contexts/authContext';
import { renderScheduleList } from '@/services/schedules';

const SchedulesCountDaily = () => {
    const { isToken } = React.useContext(AuthContext)
    const [schedulesDailyQuantity, setSchedulesDayQuantity] = React.useState<number>(0);

    async function countSchedules() {
        const { response } = await renderScheduleList(isToken);
        const currentDailySchedules = await getSchedulesDailyQuantity(response)
        setSchedulesDayQuantity(currentDailySchedules);
    }

    React.useEffect(() => {
        countSchedules();
    }, []);

    return (
        <S.Container>
            <S.Content>
                <FaUserClock />
                <S.Count>{schedulesDailyQuantity}</S.Count>
            </S.Content>
            <S.Title>Agendamentos do dia</S.Title>
        </S.Container>
    )
}

export default SchedulesCountDaily;