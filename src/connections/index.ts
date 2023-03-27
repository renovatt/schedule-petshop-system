import { ScheduleFormProps } from "@/components/Forms/ScheduleForm/types";

export type CountSchedulesProps = {
    schedules?: ScheduleFormProps[]
}

function countSchedules(
    schedules: CountSchedulesProps,
    getDate: (schedule: any) => number,
    predicate: (schedule: any) => boolean
): number {
    const currentDate = getDate(new Date());
    const currentSchedules = schedules?.schedules?.filter(schedule => {
        const scheduleDate = getDate(new Date(schedule.date));
        return scheduleDate === currentDate && predicate(schedule);
    });
    return currentSchedules?.length ?? 0;
}

export async function getSchedulesMonthQuantity(schedules: CountSchedulesProps): Promise<number> {
    return countSchedules(
        schedules,
        date => date.getMonth() + 1,
        schedule => new Date(schedule.date)
            .getMonth() + 1 === new Date().getMonth() + 1 && schedule.status === true
    );
}

export async function getSchedulesMonthCanceledQuantity(schedules: CountSchedulesProps): Promise<number> {
    return countSchedules(
        schedules,
        date => date.getMonth() + 1,
        schedule => new Date(schedule.canceled_date)
            .getMonth() + 1 === new Date().getMonth() + 1 && schedule.status === false
    );
}

export async function getSchedulesDailyQuantity(schedules: CountSchedulesProps): Promise<number> {
    return countSchedules(schedules, date => date.getDate(), schedule => schedule.status === true);
}