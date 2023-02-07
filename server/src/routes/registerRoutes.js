const router = require('express').Router();
const { registerUser } = require('../controllers/registerControllers');
const { isNotAuth } = require('../middlewares/isNotAuth');

module.exports = router.post('/', isNotAuth, registerUser);
