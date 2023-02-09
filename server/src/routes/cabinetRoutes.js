const router = require('express').Router();
const { createUserData } = require('../controllers/cabinetControllers');

// module.exports = router.get('/', userData);
module.exports = router.put('/', createUserData);
