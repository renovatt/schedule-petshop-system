import prisma from "../../prisma";
import { ClientFormProps } from "@/components/Forms/ClientForm/types";

export async function createClient(data: ClientFormProps) {
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
    return client;
  }