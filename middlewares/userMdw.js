const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const validateUser = (req, res, next) => {
  const { error } = Joi.object({
    displayName: Joi.string().min(8).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    image: Joi.string(),
  }).validate(req.body);
  if (error) {
    next(error);
  } 
  next();
};

const searchDuplicated = async (req, res, next) => {
    const { email } = req.body;
    const findUser = await User.findOne({ where: { email } });
    if (findUser) {
      return res.status(409).json({ message: 'User already registered' });
    }
    next();
};

const validate = (auth, email, findUser) => {
  if (!auth || !email || !findUser) {
    return true;
  }
  return false;
};

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const { email } = jwt.verify(authorization, JWT_SECRET);
    const findUser = await User.findOne({ where: { email } });
    if (validate(authorization, email, findUser)) {
      throw Error;
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const findById = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  next();
};

module.exports = {
  validateUser,
  searchDuplicated,
  validateToken,
  findById,
};
