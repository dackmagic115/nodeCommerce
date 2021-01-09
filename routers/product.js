const router = require('express').Router();
const {
  create,
  productById,
  read,
  update,
  list,
  listRelated,
  listCategories,
  listBySearch,
  photo,
} = require('../controllers/product.controller');

const { isAdmin, isAuth, requireSignin } = require('../middleware/auth');
const userController = require('../controllers/user.controller');

router.get('/:productId', read);
router.post('/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/:productId/:userId', requireSignin, isAuth, isAdmin, remove);
router.put('/:productId/:userId', requireSignin, isAuth, isAdmin, update);

router.get('', list);
router.get('/related/:productId', listRelated);
router.get('/categories'), listCategories);
router.post('/by/search', listBySearch);
router.get('product/photo/:productId', photo)

router.param('userId', userController.userById);
router.param('productId', productById);

module.exports = router;
