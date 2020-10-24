const router = require('express').Router(),
  controller = require('../controllers/user.controller');

router.get('/', controller.getAll);

module.exports = router;
