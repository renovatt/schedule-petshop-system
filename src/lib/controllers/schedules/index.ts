import prisma from "../../prisma";
import { ScheduleFormProps } from "@/components/Forms/ScheduleForm/types";
import moment from "moment";

export async function createSchedule(data: ScheduleFormProps, userId: string | undefined) {
    try {
        const ageIsNegative = (Number(data.age) <= 0);
        const weightIsNegative = (Number(data.weight) <= 0);

        const referenceImageId = data.reference_image_id ? data.reference_image_id : "";

        const t = new Date(data.date);
        const momentDate = moment(t);

        const alreadyExists = await prisma.schedules.findFirst({
            where: {
                date: {
                    gte: momentDate.startOf("hour").toDate().toISOString(),
                    lte: momentDate.endOf("hour").toDate().toISOString(),
                },
                status: true
            },
        });

        if (ageIsNegative) throw new Error("A idade precisa ser um valor válido!");
        if (weightIsNegative) throw new Error("O peso precisa ser um valor válido!");
        if (alreadyExists) throw new Error("Já existe um agendamento para esse dia e horário.");

        const schedule = await prisma.schedules.create({
            data: {
                tutor: data.tutor,
                pet: data.pet,
                age: data.age,
                sex: data.sex,
                breed: data.breed,
                weight: data.weight,
                reference_image_id: referenceImageId,
                date: data.date,
                canceled_date: new Date(data.date).toISOString(),
                status: data.client,
                client: data.client,
                specie: data.specie,
                user: {
                    connect: { id: userId },
                }
            },
        });
        return { schedule };
    } catch (error) {
        return { error }
    }
}

export async function getAllSchedules(userId: string | undefined) {
    try {
        const schedules = await prisma.schedules.findMany({
            where: {
                userId: userId
            }
        })
        return { schedules }
    } catch (error) {
        return { error }
    }
}

export async function updateSchedule(id: string, data: ScheduleFormProps) {
    try {
        const referenceImageId = data.reference_image_id ? data.reference_image_id : "";

        const t = new Date(data.date);
        const momentDate = moment(t);

        const ageIsNegative = (Number(data.age) <= 0);
        const weightIsNegative = (Number(data.weight) <= 0);

        let schedule = await prisma.schedules.findUnique({
            where: { id: id },
        });

        if (!schedule) throw new Error("Agendamento não encontrado.");
        if (ageIsNegative) throw new Error("A idade precisa ser um valor válido!");
        if (weightIsNegative) throw new Error("O peso precisa ser um valor válido!");

        if (momentDate.isSame(moment(schedule.date))) {
            schedule = await prisma.schedules.update({
                where: { id: id },
                data: {
                    tutor: data.tutor,
                    pet: data.pet,
                    age: data.age,
                    sex: data.sex,
                    breed: data.breed,
                    weight: data.weight,
                    reference_image_id: referenceImageId,
                    canceled_date: data.canceled_date,
                    status: data.status,
                    client: data.client,
                    specie: data.specie,
                },
            });
        } else {
            const alreadyExists = await prisma.schedules.findFirst({
                where: {
                    date: {
                        gte: momentDate.startOf("hour").toISOString(),
                        lte: momentDate.endOf("hour").toISOString(),
                    },
                    status: true
                },
            });

            if (alreadyExists) throw new Error("Já existe um agendamento para esse dia e horário.");

            schedule = await prisma.schedules.update({
                where: { id: id },
                data: {
                    tutor: data.tutor,
                    pet: data.pet,
                    age: data.age,
                    sex: data.sex,
                    breed: data.breed,
                    weight: data.weight,
                    reference_image_id: referenceImageId,
                    date: data.date,
                    canceled_date: data.canceled_date,
                    status: data.status,
                    client: data.client,
                    specie: data.specie,
                },
            });
        }

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

export async function getAllCanceledSchedules(userId: string | undefined) {
    try {
        const schedules = await prisma.schedules.findMany({
            where: {
                userId: userId,
                status: false
            },
        })
        return { schedules }
    } catch (error) {
        return { error }
    }
}

export async function deleteAllCanceledSchedules(userId: string | undefined,) {
    try {
        const schedules = await prisma.schedules.deleteMany({
            where: {
                userId: userId,
                status: false
            },
        })
        return { schedules }
    } catch (error) {
        return { error }
    }
}