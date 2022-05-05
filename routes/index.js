const { Router } = require('express');
const cryptoDetailsRoutes = require('./cryptoDetails.routes.js');

const apiRouter = Router();
apiRouter.use('/crypto_details', cryptoDetailsRoutes);

module.exports = apiRouter