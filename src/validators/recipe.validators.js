const joi = require("joi");

/**
 *
 * @param {joi.ObjectSchema<any>} validationSchema
 * @returns
 */
const validator = (validationSchema) => (req, res, next) => {
  try {
    const result = validationSchema.validate(req.body);
    if (result.error) {
      return res.status(400).json({
        status: "error",
        message: "Validation error",
        data: result.error
      });
    }

    req.body = result.value;

    next();
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Validation error",
      data: error
    });
  }
};

const schema = joi.object({
  title: joi.string().max(50).trim(),
  description: joi.string().max(256).lowercase().trim(),
  ingredients: joi.array().items(
    joi.object({
      name: joi.string(),
      quantity: joi.string()
    })
  ),
  instructions: joi.array().items(
    joi.object({
      stepNumber: joi.number().required(),
      description: joi.string()
    })
  ),
  prepTimeInMinutes: joi.number().required(),
  cookTimeInMinutes: joi.number().required(),
  numberOfServings: joi.number().required(),
  category: joi.string().required(),
  cuisine: joi.string().required(),
  difficulty: joi.string().required(),
  image: joi.string()
});

schema.validate({});

const commentRecipeSchema = joi.object({
  body: joi.string().trim().max(100)
});

const rateRecipeSchema = joi.object({
  rating: joi.number().min(1).max(5)
});

module.exports = {
  validateCreateRecipe: validator(schema),
  validateCommentRecipe: validator(commentRecipeSchema),
  validateRateRecipe: validator(rateRecipeSchema)
};
