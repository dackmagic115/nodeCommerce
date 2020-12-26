const router = require('express').Router();
const controller = require('../controllers/user.controller');
const { isAdmin, isAuth, requireSignin } = require('../middleware/auth');

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.param('userId', controller.userById);

module.exports = router;
