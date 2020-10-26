const router = require('express').Router();
const controller = require('../controllers/user.controller');
router.post('/signup', controller.signUp);

module.exports = router;
