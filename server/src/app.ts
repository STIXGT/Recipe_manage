// src/app.ts
import express from 'express';
import UserRoutes from './routes/user.route';
import RecipeRoutes from './routes/recipe.route';
import cors from 'cors';

const app = express();

app.use(cors());
// Middlewares

app.use(express.json());

// Rutas
app.use('/api', UserRoutes);
app.use('/api', RecipeRoutes);

export default app;
