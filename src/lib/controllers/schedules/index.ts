import prisma from "../../prisma";
import { ScheduleFormProps } from "@/components/Forms/ScheduleForm/types";

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

export async function getAllSchedules() {
    try {
        const schedules = await prisma.schedule.findMany()
        return { schedules }
    } catch (error) {
        return { error }
    }
}

export async function updateSchedule(id: string, data: ScheduleFormProps) {
    try {
        const schedule = await prisma.schedule.update({
            where: { id: id },
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
            }
        })
        return { schedule }
    } catch (error) {
        return { error }
    }
}

export async function deleteSchedule(id: string) {
    try {
        const schedule = await prisma.schedule.delete({
            where: { id: id }
        })
        return { schedule }
    } catch (error) {
        return { error }
    }
}

export async function findSchedule(id: string) {
    try {
        const schedule = await prisma.schedule.findUnique({
            where: { id: id }
        })
        return { schedule }
    } catch (error) {
        return { error }
    }
}