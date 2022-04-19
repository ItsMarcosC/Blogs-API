const { BlogPost, User, Category } = require('../models');
const { createPost } = require('../services/postSvc');

const sendPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const obj = {
      userId: req.userId,
      title,
      content,
    };
    const data = await createPost(obj);
    const { id } = data.dataValues;
    res.status(201).json({ id, ...obj });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const findPost = async (req, res) => {
  try {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  sendPost,
  findPost,
}; 
