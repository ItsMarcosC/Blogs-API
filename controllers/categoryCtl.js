const { Category } = require('../models');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    await Category.create({ name });
    res.status(201).json({ name });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const searchCategory = async (_req, res) => {
  try {
    const result = await Category.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = { createCategory, searchCategory };
