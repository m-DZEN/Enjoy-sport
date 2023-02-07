const router = require('express').Router();
const { getGameField } = require('../controllers/gameControllers');

module.exports = router.get('/', getGameField);
