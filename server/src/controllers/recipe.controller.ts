import { Request, Response } from "express";
import { getAllRecipes, createRecipe, updateRecipe, deleteRecipe } from '../models/recipe.model';

export async function getRecipesController(req: Request, res: Response) {
    try {
        const recipes = await getAllRecipes();
        console.log("buscando recipes DESDE CONTROLLER", recipes);
        res.json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las recetas' });
    }
};

export async function createRecipeController(req: Request, res: Response) {
    try {
        const { name, userId } = req.body;
        const recipe = await createRecipe(name, userId);
        console.log("creando recipe DESDE CONTROLLER", recipe);
        res.json(recipe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la receta' });
    }
};

export async function updateRecipeController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name, userId } = req.body;
        const recipe = await updateRecipe(Number(id), name, userId);
        console.log("actualizando recipe DESDE CONTROLLER", recipe);
        res.json(recipe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la receta' });
    }
};

export async function deleteRecipeController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const recipe = await deleteRecipe(Number(id));
        console.log("borrando recipe DESDE CONTROLLER", recipe);
        res.json(recipe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la receta' });
    }
};
