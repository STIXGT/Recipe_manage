
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllUsers() {
    const users = await prisma.user.findMany({ orderBy: { id: 'asc' } });
    console.log("Testeando en user models", users);
    return users;
}

export async function getUserById(id: number) {
    const user = await prisma.user.findUnique({ where: { id } });
    console.log(user);
    return user;
}

export async function createUser(name: string, email: string) {
    const user = await prisma.user.create({ data: { name, email } });
    console.log(user);
    return user;
}

export async function updateUser(id: number, name: string, email: string) {
    const user = await prisma.user.update({
        where: { id },
        data: { name, email },
    });
    console.log(user);
    return user;
}

export async function deleteUser(id: number) {
    const user = await prisma.user.delete({ where: { id } });
    console.log(user);
    return user;
}
