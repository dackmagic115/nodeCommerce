const router = require('express').Router();
const { signUp } = require('../controllers/user.controller');
const { signUpValidator } = require('../validator/user');
router.post('/signup', signUpValidator, signUp);

module.exports = router;
