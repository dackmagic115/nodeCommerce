const router = require('express').Router();
const { create } = require('../controllers/category.controller');

const { isAdmin, isAuth, requireSignin } = require('../middleware/auth');
const userController = require('../controllers/user.controller');

router.post('/:userId', requireSignin, isAuth, isAdmin, create);

router.param('userId', userController.userById);

module.exports = router;
