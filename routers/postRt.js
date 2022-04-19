const express = require('express');
const { validateInfo, searchDuplicatedCategory } = require('../middlewares/postMdw');
const { validateToken } = require('../middlewares/userMdw');
const postCtl = require('../controllers/postCtl');

const router = express.Router();

router.post('/', validateInfo, validateToken, searchDuplicatedCategory, postCtl.sendPost);

module.exports = router;
