const Recipe = require("../models/recipe.model");

const createRecipe = async (req, res, next) => {
  try {
    // check to ensure the recipe title is unique
    const { title } = req.body;

    const foundRecipe = await Recipe.findOne({ title });

    if (foundRecipe) {
      // Duplicate recipe title
      return res.status(409).json({
        status: "error",
        message: `Recipe with title '${title}' already exists.`
      });
    }

    // create a recipe object
    const newRecipe = new Recipe({
      title,
      description: req.body.description,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      prepTimeInMinutes: req.body.prepTimeInMinutes,
      cookTimeInMinutes: req.body.cookTimeInMinutes,
      numberOfServings: req.body.numberOfServings,
      category: req.body.category,
      cuisine: req.body.cuisine,
      difficulty: req.body.difficulty,
      image: req.body.image,
      createdBy: req.user._id
    });

    // save to the db
    // await newRecipe.save();
    const recipe = await Recipe.create(newRecipe);

    // Return a 201 (created) response
    return res.status(201).json({
      status: "success",
      message: "Recipe created",
      data: recipe
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: "error", message: "Something went wrong" });
  }
};

const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();

    return res.status(200).json({
      status: "success",
      message: "Fetched Recipes Successfully",
      data: recipes
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: "error", message: "Something went wrong" });
  }
};

const getRecipeById = async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({
        success: "error",
        message: `Recipe with the given id '${recipeId}' was not found.`
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Fetched Recipe Successfully",
      data: recipe
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { createRecipe, getAllRecipes, getRecipeById };
