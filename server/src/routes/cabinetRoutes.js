const router = require('express').Router();
const { createUserData, userData } = require('../controllers/createUserDataControllers');

module.exports = router.get('/', userData);

module.exports = router.put('/', createUserData);
