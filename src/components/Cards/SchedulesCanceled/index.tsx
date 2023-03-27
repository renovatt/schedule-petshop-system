import React from 'react'
import * as S from './style'
import { FaUserTimes } from 'react-icons/fa'
import { renderScheduleList } from '@/services';
import { getSchedulesMonthCanceledQuantity } from '@/connections';
import { AuthContext } from '@/components/contexts/authContext';

const SchedulesCanceled = () => {
    const { isToken } = React.useContext(AuthContext)
    const [schedulesCanceledQuantity, setSchedulesCanceledQuantity] = React.useState<number>(0);
    React.useEffect(() => {
        async function loadSchedules() {
            const { response } = await renderScheduleList(isToken);
            const currentMonthSchedulesCanceled = await getSchedulesMonthCanceledQuantity(response)
            setSchedulesCanceledQuantity(currentMonthSchedulesCanceled);
        }
        loadSchedules();
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

export default SchedulesCanceled