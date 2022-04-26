const Joi = require('joi');

const validateCategory = (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
  }).validate(req.body);
  if (error) {
    next(error);
  }
  next();
};
module.exports = { validateCategory };
