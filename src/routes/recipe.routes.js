const Router = require("express").Router;
const { createRecipe, getAllRecipes, getRecipeById } = require("../controllers/recipe.controller.js");
const auth = require("../middleware/auth.middleware.js");

const recipeRouter = Router();

recipeRouter.post("/", auth, createRecipe);
recipeRouter.get("/", auth, getAllRecipes);
recipeRouter.get("/:recipeId", auth, getRecipeById);

module.exports = recipeRouter;
