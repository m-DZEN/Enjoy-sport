const router = require('express').Router();
const { logoutUser } = require('../controllers/logoutControllers');
const { isAuth } = require('../middlewares/isAuth');

router.get('/', isAuth, logoutUser);

module.exports = router;
