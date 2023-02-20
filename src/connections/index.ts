import { DataListSchedulesProps } from "@/components/Forms/ScheduleForm/types";

export async function getSchedulesMonthQuantity(schedules: DataListSchedulesProps): Promise<number> {
    const currentMonth = new Date().getMonth() + 1;
    const currentMonthSchedules = schedules?.schedules?.filter(schedule => {
        const scheduleDate = new Date(schedule.date);
        return scheduleDate.getMonth() + 1 === currentMonth;
    });
    return currentMonthSchedules?.length ?? 0;
}