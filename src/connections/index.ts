import { DataListSchedulesProps } from "@/components/Forms/ScheduleForm/types";

export async function getSchedulesMonthQuantity(schedules: DataListSchedulesProps): Promise<number> {
    const currentMonth = new Date().getMonth() + 1;
    const currentMonthSchedules = schedules?.schedules?.filter(schedule => {
        const scheduleDate = new Date(schedule.date).getMonth() + 1;
        return scheduleDate === currentMonth;
    });
    return currentMonthSchedules?.length ?? 0;
}

export async function getSchedulesDailyQuantity(schedules: DataListSchedulesProps): Promise<number> {
    const currentDay = new Date().getDate();
    const currentDaySchedules = schedules?.schedules?.filter(schedule => {
        const scheduleDate = new Date(schedule.date).getDate();
        return scheduleDate === currentDay;
    });
    return currentDaySchedules?.length ?? 0;
}