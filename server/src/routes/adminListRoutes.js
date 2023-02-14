const router = require('express').Router();
const { setUserList, deleteUser, addTrain } = require('../controllers/adminListControllers');

module.exports = router.get('/', setUserList);
module.exports = router.delete('/', deleteUser);
module.exports = router.post('/', addTrain);
