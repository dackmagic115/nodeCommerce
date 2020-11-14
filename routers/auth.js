const router = require('express').Router();
const { signUp, signIn, signOut } = require('../controllers/user.controller');
const { signUpValidator } = require('../validator/user');
router.post('/signup', signUpValidator, signUp);
router.post('/signin', signIn);
router.post('/signOut', signOut);

module.exports = router;
