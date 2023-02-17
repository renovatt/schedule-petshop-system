import { DataListProps } from '@/components/Forms/ScheduleForm/types'
import React from 'react'
import ScheduleList from '../../Lists/SchedulesList'
import * as S from './style'

const ScheduleTable = () => {
    const [dataBase, setDatabase] = React.useState<DataListProps | null>(null)
    const gettingDatabase = async () => {
        const response = await fetch('/api/schedules')
        const json = await response.json()
        setDatabase(json)
        // console.log(dataBase)
    }

    React.useEffect(() => {
        gettingDatabase()
    }, [])

    return (
        <S.Container>
            <S.Table>
                {dataBase?.schedules?.map(data => (
                    <ScheduleList
                        key={data.id}
                        id={data.id}
                        svg=''
                        name={data.tutor}
                        pet={data.pet}
                        age={data.age}
                        sex={data.sex}
                        breed={data.breed}
                        reference_image_id={data.reference_image_id}
                        weight={data.weight}
                        client
                        time={data.time}
                        date={new Date(data.date)} />
                ))}
            </S.Table>
        </S.Container>
    )
}

export default ScheduleTable