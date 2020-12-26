const router = require('express').Router();

router.use('/', require('./auth'));
router.use('/users', require('./user'));
router.use('/categories', require('./category'));

module.exports = router;
