const router = require('express').Router();
const {
  setUserList,
  deleteUser,
  addTrain,
  delTrain,
  addNutrition,
  delFood,
} = require('../controllers/adminListControllers');

module.exports = router.get('/', setUserList);
module.exports = router.delete('/', deleteUser);
module.exports = router.delete('/deltrain', delTrain);
module.exports = router.delete('/delfood', delFood);
module.exports = router.post('/', addTrain);
module.exports = router.post('/add', addNutrition);
