const router = require('express').Router();
const { createUserData, setUserData } = require('../controllers/cabinetControllers');

module.exports = router.post('/', setUserData);
module.exports = router.put('/', createUserData);
