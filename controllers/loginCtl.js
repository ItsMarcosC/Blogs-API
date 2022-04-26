const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const newLogin = async (req, res) => {
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
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { newLogin };
