import prisma from "../../prisma";
import { ScheduleFormProps } from "@/components/Forms/ScheduleForm/types";

export async function createSchedule(data: ScheduleFormProps) {
    try {
        const schedule = await prisma.schedules.create({
            data: {
                tutor: data.tutor,
                pet: data.pet,
                age: data.age,
                sex: data.sex,
                breed: data.breed,
                weight: data.weight,
                reference_image_id: data.reference_image_id,
                date: new Date(data.date),
                canceled_date: new Date(data.date),
                status: data.client,
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
        const schedules = await prisma.schedules.findMany()
        return { schedules }
    } catch (error) {
        return { error }
    }
}

export async function updateSchedule(id: string, data: ScheduleFormProps) {
    try {
        const schedule = await prisma.schedules.update({
            where: { id: id },
            data: {
                tutor: data.tutor,
                pet: data.pet,
                age: data.age,
                sex: data.sex,
                breed: data.breed,
                weight: data.weight,
                reference_image_id: data.reference_image_id,
                date: new Date(data.date),
                canceled_date: new Date(data.canceled_date),
                status: data.status,
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
        const schedule = await prisma.schedules.delete({
            where: { id: id }
        })
        return { schedule }
    } catch (error) {
        return { error }
    }
}

export async function findSchedule(id: string) {
    try {
        const schedule = await prisma.schedules.findUnique({
            where: { id: id }
        })
        return { schedule }
    } catch (error) {
        return { error }
    }
}