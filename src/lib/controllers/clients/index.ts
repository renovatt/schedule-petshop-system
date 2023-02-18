import prisma from "../../prisma";
import { ClientFormProps } from "@/components/Forms/ClientForm/types";

export async function createClient(data: ClientFormProps) {
  try {
    const client = await prisma.client.create({
      data: {
        name: data.name,
        age: data.age,
        sex: data.sex,
        street: data.street,
        number: data.house_number,
        neighborhood: data.neighborhood,
        city: data.city,
        contact: data.contact,
      },
    });
    return { client };
  } catch (error) {
    return { error }
  }
}

export async function getAllClients() {
  try {
    const clients = await prisma.client.findMany()
    return { clients }
  } catch (error) {
    return { error }
  }
}

export async function updateClient(id: string, data: ClientFormProps) {
  try {
    const client = await prisma.client.update({
      where: { id: id },
      data: {
        name: data.name,
        age: data.age,
        sex: data.sex,
        street: data.street,
        number: data.house_number,
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
    const client = await prisma.client.delete({
      where: { id: id }
    })
    return { client }
  } catch (error) {
    return { error }
  }
}

export async function findClient(id: string) {
  try {
    const client = await prisma.client.findUnique({
      where: { id: id }
    })
    return { client }
  } catch (error) {
    return { error }
  }
}