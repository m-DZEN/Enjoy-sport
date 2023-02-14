const router = require('express').Router();
const {
  setUserList, deleteUser, addTrain, delTrain,
} = require('../controllers/adminListControllers');

module.exports = router.get('/', setUserList);
module.exports = router.delete('/', deleteUser);
module.exports = router.delete('/deltrain', delTrain);
module.exports = router.post('/', addTrain);
