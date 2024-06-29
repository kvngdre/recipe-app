const express = require("express");
const auth = require("../middleware/auth.middleware");
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipeById,
  deleteRecipeById,
  rateRecipe,
  createRecipeComment,
  deleteRecipeComment
} = require("../controllers/recipe.controller");
const restrictToOwner = require("../middleware/restrict.middleware");
const { validateCreateRecipe, validateCommentRecipe, validateRateRecipe } = require("../validators/recipe.validators");
const router = express.Router();

router.post("/", auth, validateCreateRecipe, createRecipe);
router.post("/:recipeId/comments", auth, validateCommentRecipe, createRecipeComment);
router.post("/:recipeId/ratings", auth, validateRateRecipe, rateRecipe);
router.get("/", getAllRecipes);
router.get("/:recipeId", auth, getRecipeById);
router.put("/:recipeId", auth, restrictToOwner, updateRecipeById);
router.delete("/:recipeId/comments/:commentId", auth, deleteRecipeComment);
router.delete("/:recipeId", auth, restrictToOwner, deleteRecipeById);

module.exports = router;
