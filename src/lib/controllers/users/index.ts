import prisma from "../../prisma";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { UserFormProps } from "@/components/Forms/LoginForm/type";
import { Prisma } from "@prisma/client";

export async function loginUser(data: UserFormProps) {
  try {
    const searchUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!searchUser) throw new Error("Usuário não encontrado.");

    const passwordMatch = await bcrypt.compare(data.password, searchUser.password);
    const token = jwt.sign({ userId: searchUser.id }, process.env.JWT_SECRET ?? "", { expiresIn: "8h" });

    if (!passwordMatch) throw new Error("Senha incorreta.");

    const user: Omit<Prisma.UserCreateInput, "password"> = {
      id: searchUser.id,
      username: searchUser.username,
      email: searchUser.email,
    }

    return { user, token };
  } catch (error) {
    return { error };
  }
}

export async function createUser(data: UserFormProps) {
  try {
    const userExists = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userExists) throw new Error("Já existe um usuário com este e-mail.");

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const createdUser = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword
      },
    });

    const user: Omit<Prisma.UserCreateInput, "password"> = {
      id: createdUser.id,
      username: createdUser.username,
      email: createdUser.email,
    }

    return { user };
  } catch (error) {
    return { error }
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany()
    return { users: users.map((user: any) => { delete user.password; return user }) }
  } catch (error) {
    return { error }
  }
}

export async function updateUser(id: string, data: UserFormProps) {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      }
    })

    const user: Omit<Prisma.UserCreateInput, "password"> = {
      id: updatedUser.id,
      username: updatedUser.username,
      email: updatedUser.email,
    }

    return { user }
  } catch (error) {
    return { error }
  }
}

export async function deleteUser(id: string) {
  try {
    const user = await prisma.user.delete({
      where: { id: id }
    })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function findUser(id: string) {
  try {
    const foundUser = await prisma.user.findUnique({
      where: { id: id }
    })

    const user: Partial<Prisma.UserCreateInput> = {
      id: foundUser?.id,
      username: foundUser?.username,
      email: foundUser?.email
    }

    return { user }
  } catch (error) {
    return { error }
  }
}