const router = require('express').Router();

const getNutrition = require('../controllers/nutritionControllers');

module.exports = router.post('/:day', getNutrition);
