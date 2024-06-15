const joi = require("joi");

const schema = joi.object({
  title: joi.string().max(50).trim(),
  description: joi.string().max(256).lowercase().trim(),
  ingredients: joi.array().items(
    joi.object({
      name: joi.string(),
      quantity: joi.string()
    })
  )
});

schema.validate({});
