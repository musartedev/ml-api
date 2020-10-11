const express = require('express');
const itemsController = require('../controllers/items');

function itemsRouter(app) {
  const itemsRoutes = express.Router();
  app.use('/items', itemsRoutes);

  // Get item info
  itemsRoutes.get('/:id', itemsController.get);
}

module.exports = itemsRouter;
