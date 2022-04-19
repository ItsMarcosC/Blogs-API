const { BlogPost } = require('../models');

const createPost = async (obj) => {
  const { title, content, userId } = obj;
  const newDate = new Date();
  const result = await BlogPost.create(
    { userId, title, content, published: newDate, updated: newDate },
);
  return result;
};

module.exports = {
  createPost,
};
