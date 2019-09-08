const express = require('express');
const routes = express.Router();
const devController = require('./controllers/devController');
const likeController = require('./controllers/likeController');
const dislikeController = require('./controllers/dislikeController');
const parametrosController = require('./controllers/parametrosController');

routes.get('/devs', devController.index);
routes.post('/devs', devController.store);
routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/dislikes', dislikeController.store);

routes.get('/parametros', parametrosController.index);
routes.post('/parametros/:paramId', parametrosController.store);

module.exports = routes;