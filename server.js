const express = require('express');
const data = require('./emoji-info.json');
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/emoji-info', (req, res, next) => res.send(data));

app.listen(8080);
