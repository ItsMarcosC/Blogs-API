const Joi = require('joi');
const { Category } = require('../models');

const validateInfo = (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number()).required(),
  }).validate(req.body);
  if (error) {
    next(error);
  }
  next();
};

const searchDuplicatedCategory = async (req, res, next) => {
  try {
    const result = await Category.findAll();
    const { categoryIds } = req.body;
    categoryIds.forEach((index) => {
      const searchCategory = result.find((item) => item.dataValues.id === index);
      if (!searchCategory) {
        throw Error;
      }
    });
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: '"categoryIds" not found' });
  }
};

module.exports = { validateInfo, searchDuplicatedCategory };
