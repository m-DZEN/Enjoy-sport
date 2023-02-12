const router = require('express').Router();

const setQuote = require('../controllers/quoteControllers');

module.exports = router.get('/', setQuote);
