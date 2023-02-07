const router = require('express').Router();
const { getUserInfo } = require('../controllers/indexControllers');

module.exports = router.get('/', getUserInfo);
