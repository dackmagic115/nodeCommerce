const router = require('express').Router();
const controller = require('../controllers/user.controller');
const { isAdmin, isAuth, requireSignin } = require('../middleware/auth');

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.get('/:userId', requireSignin, isAuth, controller.read);
router.put('/:userId', requireSignin, isAuth, controller.update);

router.param('userId', controller.userById);

module.exports = router;
