const router = require('express').Router();
const { loginUser } = require('../controllers/loginControllers');
const { isNotAuth } = require('../middlewares/isNotAuth');

module.exports = router.post('/', isNotAuth, loginUser);
