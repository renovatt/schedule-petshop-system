import prisma from "../../prisma";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { UserFormProps } from "@/components/Forms/LoginForm/type";

export async function loginUser(data: UserFormProps) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password);

    if (!passwordMatch) {
      throw new Error("Senha incorreta");
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET ?? "", { expiresIn: "8h" });

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

    if (userExists) {
      throw new Error('E-mail já existe')
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword
      },
    });

    return { user };
  } catch (error) {
    return { error }
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany()
    return { users }
  } catch (error) {
    return { error }
  }
}

export async function updateUser(id: string, data: UserFormProps) {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    const user = await prisma.user.update({
      where: { id: id },
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      }
    })
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
    const user = await prisma.user.findUnique({
      where: { id: id }
    })
    return { user }
  } catch (error) {
    return { error }
  }
}