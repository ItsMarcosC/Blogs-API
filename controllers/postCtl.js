const { BlogPost } = require('../models');

const createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const newDate = new Date();
    const result = await BlogPost.create(
      { userId, title, content, published: newDate, updated: newDate },
  );
    const { id } = result.dataValues;
    res.status(201).json({ id, ...result });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createPost,
};
