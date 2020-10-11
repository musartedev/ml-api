require('dotenv').config();

const express = require('express');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');

const router = require('./src/router');

const PORT = process.env.PORT || 3002;

const app = express();
const server = http.createServer(app);

// App configuration
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept,x-access-token',
  );
  next();
});

app.use(cors());
app.set('port', PORT);

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(
  bodyParser.json({
    limit: '50mb',
  }),
);

// Routes
router(app);

// Start server
// =============================================================================
server.listen(app.get('port'), () => {
  console.log('Magic happens on port ', app.get('port'));
});

exports.app = app;
