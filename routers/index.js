const router = require('express').Router();

router.use('/', require('./auth'));
router.use('/users', require('./user'));
router.use('/categories', require('./category'));
router.use('/product', require('./product'));

module.exports = router;
