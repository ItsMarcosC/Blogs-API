const Joi = require('joi');
const { User } = require('../models');

const validateInfo = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate(req.body);
  if (error) {
    next(error);
  }
  next();
};
const searchDuplicatedUser = async (req, res, next) => {
  const { email } = req.body;
  const findUser = await User.findOne({ where: { email } });
  if (!findUser) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};
module.exports = {
  validateInfo,
  searchDuplicatedUser,
};