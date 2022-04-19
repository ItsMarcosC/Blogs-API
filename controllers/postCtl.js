const { createPost, getPosts } = require('../services/postSvc');

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

const findPost = async (_req, res) => {
  try {
    const posts = await getPosts();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  sendPost,
  findPost,
}; 
