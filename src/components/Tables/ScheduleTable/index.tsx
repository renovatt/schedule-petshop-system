import React from 'react'
import * as S from './style'
import { Loader } from '@/components/Helper/Loader'
import ScheduleList from '../../Lists/SchedulesList'
import { ListContext } from '@/components/contexts/listContext'

const ScheduleTable = () => {
    const [prevSize, setPrevSize] = React.useState(0)
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const { loader, schedules, loadSchedules } = React.useContext(ListContext)

    const filteredSchedules = React.useMemo(() => {
        if (schedules && schedules.schedules) {
            return schedules.schedules.filter(schedule => schedule.status);
        }
        return [];
    }, [schedules?.schedules]);

    React.useEffect(() => {
        loadSchedules()
    }, [])

    React.useEffect(() => {
        if (schedules && schedules.schedules) {
            const newSize = schedules.schedules.length
            if (newSize > prevSize) {
                scrollRef.current?.scrollTo(0, -scrollRef.current.scrollHeight)
            }
            setPrevSize(newSize)
        }
    }, [schedules])

    return (
        <S.Container>
            <S.Table ref={scrollRef}>
                {loader ? <Loader /> :
                    filteredSchedules.length ? filteredSchedules?.map((schedule, index) =>
                        (<ScheduleList key={index} {...schedule} />)) : <p>Sem agendamentos.</p>
                }
            </S.Table>
        </S.Container>
    )
}

export default ScheduleTable