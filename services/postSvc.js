const { BlogPost, User, Category } = require('../models');

const createPost = async (param) => {
  const { title, content, userId } = param;
  const result = await BlogPost.create({ userId, title, content });
  return result;
};

const getPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return result;
};

module.exports = { createPost, getPosts };
