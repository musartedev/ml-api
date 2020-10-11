const express = require('express');
const searchController = require('../controllers/search');

module.exports = (app) => {
  const apiRoutes = express.Router();

  apiRoutes.get('/', (req, res) => {
    res.json({
      message: 'Welcome to our api',
    });
  });

  apiRoutes.get('/search', searchController.find);

  app.use(apiRoutes);
};
