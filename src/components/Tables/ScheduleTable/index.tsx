import React from 'react'
import * as S from './style'
import { Loader } from '@/components/Helper/Loader'
import ScheduleList from '../../Lists/SchedulesList'
import { GlobalContext } from '@/context'

const ScheduleTable = () => {
    const [prevSize, setPrevSize] = React.useState(0)
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const { loader, schedules, loadSchedules } = React.useContext(GlobalContext)

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
                {loader && <Loader />}
                {filteredSchedules ? filteredSchedules?.map(data => (<ScheduleList {...data} />)) :
                    <ScheduleList
                        status
                        client
                        key=""
                        id=""
                        tutor=""
                        pet="Sem Agendamentos"
                        age=""
                        sex=""
                        breed=""
                        reference_image_id=""
                        weight=""
                        date={new Date("2023-12-06")}
                        canceled_date={new Date("2023-12-06")}
                        created_at={new Date("2023-12-06")} />
                }
            </S.Table>
        </S.Container>
    )
}

export default ScheduleTable