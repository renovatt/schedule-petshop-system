import prisma from "../../prisma";
import { ScheduleFormProps } from "@/components/Forms/ScheduleForm/types";

export async function getAllSchedules() {
    try {
        const schedules = await prisma.schedule.findMany()
        return { schedules }
    } catch (err) {
        console.error(err)
    }
}

export async function createSchedule(data: ScheduleFormProps) {
    try {
        const schedule = await prisma.schedule.create({
            data: {
                tutor: data.tutor,
                pet: data.pet,
                age: data.age,
                sex: data.sex,
                breed: data.breed,
                weight: data.weight,
                reference_image_id: data.reference_image_id,
                date: data.date,
                time: data.time,
                client: data.client,
            },
        });
        return { schedule };
    } catch (error) {
        return { error }
    }
}