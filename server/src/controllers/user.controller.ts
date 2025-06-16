import { Request, Response } from "express";
import { getAllUsers, createUser, updateUser, deleteUser } from '../models/user.model';

export async function getUsersController(req: Request, res: Response) {
    try {
        const users = await getAllUsers();
        console.log("Testeando en user controllers", users);
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

export async function createUserController(req: Request, res: Response) {
    try {
        const { name, email } = req.body;
        const user = await createUser(name, email);
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

export async function updateUserController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const user = await updateUser(Number(id), name, email);
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

export async function deleteUserController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const user = await deleteUser(Number(id));
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};
