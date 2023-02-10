const router = require('express').Router();

const {
  setUserStatistic,
  createUserStatistic,
} = require('../controllers/statisticControllers');

module.exports = router.post('/', setUserStatistic);
module.exports = router.put('/', createUserStatistic);
