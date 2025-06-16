import { Router } from 'express';
import { getRecipesController, createRecipeController, updateRecipeController, deleteRecipeController } from '../controllers/recipe.controller';

const router = Router();

router.get('/recipes', getRecipesController);

router.post('/recipes', createRecipeController);

router.put('/recipes/:id', updateRecipeController);

router.delete('/recipes/:id', deleteRecipeController);

export default router;
