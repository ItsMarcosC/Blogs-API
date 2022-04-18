const express = require('express');
const categoryCtl = require('../controllers/categoryCtl');
const { validateToken } = require('../middlewares/userMdw');
 const { validateCategory } = require('../middlewares/categoryMdw');

const router = express.Router();

router.post('/', validateCategory, validateToken, categoryCtl.createCategory);
router.get('/', validateToken, categoryCtl.searchCategory);

module.exports = router;
