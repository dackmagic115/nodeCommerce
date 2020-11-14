const router = require('express').Router();
const { signUp, signIn } = require('../controllers/user.controller');
const { signUpValidator } = require('../validator/user');
router.post('/signup', signUpValidator, signUp);
router.post('/signin', signIn);

module.exports = router;
