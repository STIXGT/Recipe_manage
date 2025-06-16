
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllRecipes() {
    const recipes = await prisma.recipe.findMany({ orderBy:{id:'asc'}});
    console.log("buscando recipes desde el model", recipes);
    return recipes;
}

export async function getRecipeById(id: number) {
    const recipe = await prisma.recipe.findUnique({ where: { id } });
    console.log("buscando recipe desde el model", recipe);
    return recipe;
}

export async function createRecipe(name: string, userId: number) {
    const recipe = await prisma.recipe.create({ data: { name, user: { connect: { id: userId } }  } });
    console.log("creando recipe desde el model", recipe);
    return recipe;
}

export async function updateRecipe(id: number, name: string, userId: number) {
    const recipe = await prisma.recipe.update({
        where: { id },
        data: { name, user: { connect: { id: userId } } },
    });
    console.log("actualizando recipe desde el model", recipe);
    return recipe;
}

export async function deleteRecipe(id: number) {
    const recipe = await prisma.recipe.delete({ where: { id } });
    console.log("borrando recipe desde el model", recipe);
    return recipe;
}
