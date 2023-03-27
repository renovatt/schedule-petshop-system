import React from 'react'
import * as S from './style'
import { FaUserClock } from 'react-icons/fa'
import { getSchedulesDailyQuantity } from '@/connections';
import { renderScheduleList } from '@/services';
import { AuthContext } from '@/components/contexts/authContext';

const SchedulesCountDaily = () => {
    const { isToken } = React.useContext(AuthContext)
    const [schedulesDailyQuantity, setSchedulesDayQuantity] = React.useState<number>(0);
    React.useEffect(() => {
        async function loadSchedules() {
            const { response } = await renderScheduleList(isToken);
            const currentDailySchedules = await getSchedulesDailyQuantity(response)
            setSchedulesDayQuantity(currentDailySchedules);
        }
        loadSchedules();
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

export default SchedulesCountDaily