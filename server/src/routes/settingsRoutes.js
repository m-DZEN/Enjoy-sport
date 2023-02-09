const router = require('express').Router();
const createUserSettings = require('../controllers/SettingsControllers')

module.exports = router.put('/', createUserSettings);
