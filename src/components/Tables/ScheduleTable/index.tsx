import React from 'react'
import * as S from './style'
import { renderScheduleList } from '@/services'
import ScheduleList from '../../Lists/SchedulesList'
import { DataListSchedulesProps } from '@/components/Forms/ScheduleForm/types'

const ScheduleTable = () => {
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const [schedules, setSchedules] = React.useState<DataListSchedulesProps | null>(null)
    const [prevSize, setPrevSize] = React.useState(0)

    React.useEffect(() => {
        async function loadSchedules() {
            const { response } = await renderScheduleList()
            setSchedules(response)
        }
        loadSchedules()
    }, [schedules])

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
                        date={data.date}
                        created_at={data.created_at} />
                ))}
            </S.Table>
        </S.Container>
    )
}

export default ScheduleTable