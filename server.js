const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 8080;

/* serve dist which contains bundled resources */
const distDir = path.join(__dirname, 'dist/');
app.use('/dist', express.static(distDir));
/* serve semantic bundle */
const semanticDir = path.join(__dirname, 'semantic/');
app.use('/semantic', express.static(semanticDir));
/* serve up jquery from node_modules */
const jquery = path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.min.js');
app.use('/dist/js/jquery.min.js', express.static(jquery));


const moviesJSONFile = path.join(__dirname, 'src/discover/movies.json');

const discoverMoviesJSON = JSON.parse(fs.readFileSync(moviesJSONFile, 'utf8'));
app.get('/api/discover', (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(discoverMoviesJSON));
});

/* serve index.html on all routes */
/* keep this on the bottom as it is a catch all route */
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.warn('Starting App.');
  console.warn(`Magic happens on port ${port}!`);
});
