// src/routes/index.ts
import { Router } from 'express';
import { getUsersController, createUserController, updateUserController, deleteUserController } from '../controllers/user.controller';

const router = Router();

router.get('/users', getUsersController);

router.post('/users', createUserController);

router.put('/users/:id', updateUserController);

router.delete('/users/:id', deleteUserController);

export default router;
