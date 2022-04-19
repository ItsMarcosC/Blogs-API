const express = require('express');
const { validatePost, searchDuplicatedCategory } = require('../middlewares/postMdw');
const { validateToken } = require('../middlewares/userMdw');
const postCtl = require('../controllers/postCtl');

const router = express.Router();

router.post('/', validatePost, validateToken, searchDuplicatedCategory, postCtl.createPost);

module.exports = router;
