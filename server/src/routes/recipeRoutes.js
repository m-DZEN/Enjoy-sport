const router = require('express').Router();

const getRecipe = require('../controllers/recipeControllers');

module.exports = router.post('/:id', getRecipe);
