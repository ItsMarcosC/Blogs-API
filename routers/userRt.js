const express = require('express');
const {
  validateUser,
  searchDuplicated,
  validateToken,
  findById,
} = require('../middlewares/userMdw');
const userCtl = require('../controllers/usersCtl');

const router = express.Router();

router.post('/', validateUser, searchDuplicated, userCtl.createUser);
router.get('/', validateToken, userCtl.findUsers);
router.get('/:id', validateToken, findById, userCtl.findUserById);

module.exports = router;
