const router = require('express').Router();

const {
  getUserStatistic,
  editUserStatistic,
} = require('../controllers/newstatisticControllers');

module.exports = router.get('/:userId', getUserStatistic);
module.exports = router.post('/', editUserStatistic);
