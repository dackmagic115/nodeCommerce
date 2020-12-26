const router = require('express').Router();
const { create } = require('../controllers/category.controller');

const { isAdmin, isAuth, requireSignin } = require('../middleware/auth');
router.post('/', requireSignin, isAuth, isAdmin, create);

module.exports = router;
