import prisma from "../../prisma";
import { ClientFormProps } from "@/components/Forms/ClientForm/types";

export async function createClient(data: ClientFormProps, userId: string | undefined) {
  try {

    const ageIsNegative = (Number(data.age) <= 0);
    const houseNumberIsNegative = (Number(data.house_number) <= 0);

    if (ageIsNegative) throw new Error("A idade precisa ser um valor válido!");
    if (houseNumberIsNegative) throw new Error("O número da casa precisa ser um valor válido!");

    const client = await prisma.clients.create({
      data: {
        name: data.name,
        age: data.age,
        sex: data.sex,
        street: data.street,
        house_number: data.house_number,
        neighborhood: data.neighborhood,
        city: data.city,
        contact: data.contact,
        user: {
          connect: { id: userId },
        }
      },
    });
    return { client };
  } catch (error) {
    return { error }
  }
}

export async function getAllClients(userId: string | undefined) {
  try {
    const clients = await prisma.clients.findMany({
      where: {
        userId: userId
      }
    })
    return { clients }
  } catch (error) {
    return { error }
  }
}

export async function updateClient(id: string, data: ClientFormProps) {
  try {

    const ageIsNegative = (Number(data.age) <= 0);
    const houseNumberIsNegative = (Number(data.house_number) <= 0);

    if (ageIsNegative) throw new Error("A idade precisa ser um valor válido!");
    if (houseNumberIsNegative) throw new Error("O número da casa precisa ser um valor válido!");

    const client = await prisma.clients.update({
      where: { id: id },
      data: {
        name: data.name,
        age: data.age,
        sex: data.sex,
        street: data.street,
        house_number: data.house_number,
        neighborhood: data.neighborhood,
        city: data.city,
        contact: data.contact,
      }
    })
    return { client }
  } catch (error) {
    return { error }
  }
}

export async function deleteClient(id: string) {
  try {
    const client = await prisma.clients.delete({
      where: { id: id }
    })
    return { client }
  } catch (error) {
    return { error }
  }
}

export async function findClient(id: string) {
  try {
    const client = await prisma.clients.findUnique({
      where: { id: id }
    })
    return { client }
  } catch (error) {
    return { error }
  }
}