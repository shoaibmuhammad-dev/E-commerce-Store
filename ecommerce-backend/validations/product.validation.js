const Joi = require("joi");

exports.createProductSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(3).max(300).required(),
  price: Joi.number().min(1).max(99999999).required(),
  stock: Joi.number().min(1).max(99999999).required(),
});
