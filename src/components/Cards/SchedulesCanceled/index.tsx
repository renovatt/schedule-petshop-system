import React from 'react'
import * as S from './style'
import { FaUserTimes } from 'react-icons/fa'
import { getSchedulesMonthCanceledQuantity } from '@/connections';
import { AuthContext } from '@/contexts/authContext';
import { renderScheduleList } from '@/services/schedules';

const SchedulesCanceled = () => {
    const { isToken } = React.useContext(AuthContext)
    const [schedulesCanceledQuantity, setSchedulesCanceledQuantity] = React.useState<number>(0);

    async function countSchedules() {
        const { response } = await renderScheduleList(isToken);
        const currentMonthSchedulesCanceled = await getSchedulesMonthCanceledQuantity(response)
        setSchedulesCanceledQuantity(currentMonthSchedulesCanceled);
    }

    React.useEffect(() => {
        countSchedules();
    }, []);

    return (
        <S.Container>
            <S.Content>
                <FaUserTimes />
                <S.Count>{schedulesCanceledQuantity}</S.Count>
            </S.Content>
            <S.Title>Cancelamentos do mês</S.Title>
        </S.Container>
    )
}

export default SchedulesCanceled;