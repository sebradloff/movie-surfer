const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

/* serve dist which contains bundled resources */
const distDir = path.join(__dirname, 'dist/');
app.use('/dist', express.static(distDir));
/* serve semantic bundle */
const semanticDir = path.join(__dirname, 'semantic/');
app.use('/semantic', express.static(semanticDir));

/* serve index.html on all routes */
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.warn('Starting App.');
  console.warn(`Magic happens on port ${port}!`);
});
