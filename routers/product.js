const router = require('express').Router();
const { create, productById, read, update } = require('../controllers/product.controller');

const { isAdmin, isAuth, requireSignin } = require('../middleware/auth');
const userController = require('../controllers/user.controller');

router.get('/:productId', read);
router.post('/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/:productId/:userId', requireSignin, isAuth, isAdmin, remove);
router.put('/:productId/:userId', requireSignin, isAuth, isAdmin, update);

router.param('userId', userController.userById);
router.param('productId', productById);

module.exports = router;
