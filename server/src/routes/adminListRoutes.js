const router = require('express').Router();
const { setUserList, deleteUser } = require('../controllers/adminListControllers');

module.exports = router.get('/', setUserList);
module.exports = router.delete('/', deleteUser);
