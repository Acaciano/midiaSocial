const express = require('express');
const routes = express.Router();
const parametrosController = require('./controllers/parametrosController');
const twitterController = require('./controllers/twitterController');

routes.get('/parametros', parametrosController.index);
routes.post('/parametros/:paramId', parametrosController.store);

routes.get('/twitter', twitterController.index);

module.exports = routes;