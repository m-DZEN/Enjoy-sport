const router = require('express').Router();
const {
  createUserSettings,
  setUserSettings,
} = require('../controllers/settingsControllers');

module.exports = router.post('/', setUserSettings);
module.exports = router.put('/', createUserSettings);
