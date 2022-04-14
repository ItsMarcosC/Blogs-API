const express = require('express');
const { validateInfo, searchDuplicatedUser } = require('../middlewares/loginMdw');
const loginCtl = require('../controllers/loginCtl');

const router = express.Router();

router.post('/', validateInfo, searchDuplicatedUser, loginCtl.newLogin);

module.exports = router;
