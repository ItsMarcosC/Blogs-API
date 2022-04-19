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

module.exports = {
  sendPost,
}; 
