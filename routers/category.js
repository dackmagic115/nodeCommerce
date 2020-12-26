const router = require('express').Router();
const { create } = require('../controllers/category.controller');
router.post('/', create);

module.exports = router;
