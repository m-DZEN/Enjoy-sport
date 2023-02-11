const router = require('express').Router();
const { setUserList } = require('../controllers/adminListControllers');

module.exports = router.get('/', setUserList);
