import React from 'react'
import * as S from './style'
import { Loader } from '@/components/Helper/Loader'
import ScheduleList from '../../Lists/SchedulesList'
import { ListContext } from '@/contexts/listContext'
import { ScheduleFormProps } from '@/components/Forms/ScheduleForm/types'

type DatePickerProps = {
    datePicker: Date | null;
}

const ScheduleTable = ({ datePicker }: DatePickerProps) => {
    const [prevSize, setPrevSize] = React.useState(0)
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const { loader, schedules, loadSchedules } = React.useContext(ListContext)
    const filteredSchedules = schedules?.filter(schedule => schedule.status) || [];
    const [filteredDatePiker, setFilteredDatePiker] = React.useState<ScheduleFormProps[]>([]);

    const filterDatePiker = () => {
        const selectedDateISO = datePicker?.toISOString().slice(0, 10);
        const currentSchedules = filteredSchedules.filter(schedule => {
            const schedulesDateISO = new Date(schedule.date).toISOString().slice(0, 10);
            return schedulesDateISO === selectedDateISO;
        });
        setFilteredDatePiker(currentSchedules);
    };

    React.useEffect(() => {
        filterDatePiker()
    }, [datePicker])

    React.useEffect(() => {
        loadSchedules()
    }, [])

    React.useEffect(() => {
        if (schedules && schedules?.length) {
            const newSize = schedules?.length
            if (newSize > prevSize) {
                scrollRef.current?.scrollTo(0, -scrollRef.current.scrollHeight)
            }
            setPrevSize(newSize)
        }
    }, [schedules])

    return (
        <S.Container>
            <S.Table ref={scrollRef}>
                {loader ? <Loader /> : (
                    <>
                        {datePicker === null && filteredSchedules.length ? (
                            filteredSchedules.map((schedule, index) => (
                                <ScheduleList key={index} {...schedule} />
                            ))
                        ) : filteredDatePiker.length ? (
                            filteredDatePiker.map((schedule, index) => (
                                <ScheduleList key={index} {...schedule} />
                            ))
                        ) : (
                            <p>Nenhum agendamento encontrado.</p>
                        )}
                    </>
                )}
            </S.Table>
        </S.Container>
    )
}

export default ScheduleTable;