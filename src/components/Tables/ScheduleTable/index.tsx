import { DataListSchedulesProps } from '@/components/Forms/ScheduleForm/types'
import { renderScheduleList } from '@/services'
import { GetServerSideProps } from 'next'
import React from 'react'
import ScheduleList from '../../Lists/SchedulesList'
import * as S from './style'

// type ScrollRef = RefObject<HTMLDivElement>;
// type ScrollRef<T> = React.MutableRefObject<T | null>;

const ScheduleTable = () => {
    const scrollRef = React.useRef<any>(null)
    const [schedules, setSchedules] = React.useState<DataListSchedulesProps | null>(null)

    React.useEffect(() => {
        async function loadSchedules() {
            const { response } = await renderScheduleList()
            setSchedules(response)
        }
        loadSchedules()
    }, [schedules])

    React.useEffect(() => {
        scrollRef.current.scrollTo(0, -scrollRef.current.scrollHeight)
    }, [schedules])

    return (
        <S.Container>
            <S.Table ref={scrollRef}>
                {schedules?.schedules?.map(data => (
                    <ScheduleList
                        client
                        key={data.id}
                        id={data.id}
                        tutor={data.tutor}
                        pet={data.pet}
                        age={data.age}
                        sex={data.sex}
                        breed={data.breed}
                        reference_image_id={data.reference_image_id}
                        weight={data.weight}
                        time={data.time}
                        date={data.date}
                        created_at={data.created_at} />
                ))}
            </S.Table>
        </S.Container>
    )
}

export default ScheduleTable