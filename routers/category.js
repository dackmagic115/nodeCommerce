const router = require('express').Router();
const {
  create,
  categoryById,
  read,
  update,
  remove,
  list,
} = require('../controllers/category.controller');

const { isAdmin, isAuth, requireSignin } = require('../middleware/auth');
const userController = require('../controllers/user.controller');
router.get('', list);
router.get(':categoryId', read);
router.post('/:userId', requireSignin, isAuth, isAdmin, create);
router.put(':categoryId', update);
router.delete(':categoryId', remove);

router.param('categoryId', categoryById);
router.param('userId', userController.userById);

module.exports = router;
