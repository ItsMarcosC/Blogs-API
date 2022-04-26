const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');

const { JWT_SECRET } = process.env;
const createUser = async (req, res) => {
try {
  const payload = {
    ...req.body,
    admin: false,
  };
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
  await User.create(req.body);
  res.status(201).json({ token });
} catch (error) {
  res.status(400).json({ message: error.message });
}
};

const findUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const findUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = { createUser, findUsers, findUserById };
