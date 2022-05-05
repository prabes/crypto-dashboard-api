const { Router } = require('express');
const controllers = require('../controllers/cryptoDetails.controllers.js');
const router = Router();

router.get('/', controllers.index);

module.exports = router;
