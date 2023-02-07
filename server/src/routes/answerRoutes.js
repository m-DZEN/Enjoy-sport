const router = require('express').Router();
const { putGameAnswer } = require('../controllers/gameAnswerControllers');

module.exports = router.put('/', putGameAnswer);
