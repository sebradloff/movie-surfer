'use strict';
var express = require('express');
var path = require('path');
let app = express();
let router = express.Router();
let port = process.env.PORT || 8080;

/* serve dist which contains bundled resources */
let distDir = path.join(__dirname, 'dist/');
app.use('/dist', express.static(distDir));

/* serve index.html on all routes */
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log('Starting App.');
  console.log('Magic happens on port ' + port + '!');
});
