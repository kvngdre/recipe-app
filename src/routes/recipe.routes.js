const express = require("express");
const auth = require("../middleware/auth.middleware");
const { createRecipe, getAllRecipes, getRecipeById, updateRecipeById, deleteRecipeById } = require("../controllers/recipe.controller");
const restrictToOwner = require("../middleware/restrict.middleware");
const { validateCreateRecipe } = require("../validators/recipe.validators");
const router = express.Router();

router.post("/", auth, validateCreateRecipe, createRecipe);
router.get("/", getAllRecipes);
router.get("/:recipeId", auth, getRecipeById);
router.put("/:recipeId", auth, restrictToOwner, updateRecipeById);
router.delete("/:recipeId", auth, restrictToOwner, deleteRecipeById)

module.exports = router;