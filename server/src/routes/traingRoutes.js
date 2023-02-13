const router = require('express').Router();

const getDayTraining = require('../controllers/trainingControllers');

module.exports = router.post('/:day', getDayTraining);
