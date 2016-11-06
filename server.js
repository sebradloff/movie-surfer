/* eslint-disable */
const express = require('express');
const path = require('path');
const app = express();
const fetch = require('isomorphic-fetch');
const HTTPStatus = require('http-status');
const config = require('./config');
const fs = require('fs');
const port = process.env.PORT || 8080;

/* serve dist which contains bundled resources */
const distDir = path.join(__dirname, 'dist');
app.use('/dist', express.static(distDir));

const imagesDir = path.join(__dirname, 'src', 'images');
app.use('/images', express.static(imagesDir));

/* this call returns JSON from a file */
/* this is nice for intial UI creation if you're not able to work with the api directly */
const moviesJSONFile = path.join(__dirname, 'test/discover/movies.json');
const discoverMoviesJSON = JSON.parse(fs.readFileSync(moviesJSONFile, 'utf8'));
app.get('/api/v1/discover', (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(discoverMoviesJSON));
});

app.get('/api/v2/discover/:pageNumber', (request, response) => {
  /* eslint max-len: ["error", 150] */
  fetch(`${config.movie_db_service}/discover/movie?sort_by=popularity.desc&page=${request.params.pageNumber}&api_key=${config.movie_db_api_key}`,
    {
      method: 'GET'
    }
  )
  .then(res => {
    return res.json();
  })
  .then(movies => {
    return response.status(HTTPStatus.OK).json(movies);
  })
  .catch(error => {
    console.error('Error occurred while fetching movies', error);
    return response.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
  });
});

app.get('/api/v1/movies', (request, response) => {
  /* eslint max-len: ["error", 150] */
  fetch(`${config.movie_db_service}/search/movie?language=en-US&query=${request.query.query}&api_key=${config.movie_db_api_key}`,
    {
      method: 'GET'
    }
  )
  .then(res => {
    return res.json();
  })
  .then(movies => {
    return response.status(HTTPStatus.OK).json(movies);
  })
  .catch(error => {
    console.error('Error occurred while fetching movies', error);
    return response.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
  });
});

app.get('/api/v1/movies/:id', (request, response) => {
  fetch(`${config.movie_db_service}/movie/${request.params.id}?&language=en-US&api_key=${config.movie_db_api_key}`,
    {
      method: 'GET'
    }
  )
  .then(res => {
    return res.json();
  })
  .then(movie => {
    return response.status(HTTPStatus.OK).json(movie);
  })
  .catch(error => {
    console.error(`Error occurred while fetching movie ${request.params.id}`, error);
    return response.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
  });
});

app.get('/api/v1/movies/:id/reviews', (request, response) => {
  fetch(`${config.movie_db_service}/movie/${request.params.id}/reviews?&language=en-US&api_key=${config.movie_db_api_key}`,
    {
      method: 'GET'
    }
  )
  .then(res => {
    return res.json();
  })
  .then(reviews => {
    return response.status(HTTPStatus.OK).json(reviews);
  })
  .catch(error => {
    console.error(`Error occurred while fetching reviews for movie ${request.params.id}`, error);
    return response.sendStatus(HTTPStatus.INTERNAL_SERVER_ERROR);
  });
});

/* serve index.html on all routes */
/* keep this on the bottom as it is a catch all route */
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});

/* if the movie_db_api_key is unset I want to crash the app */
if (config.movie_db_api_key === undefined) {
  console.warn('The movie db API key is not set');
  console.warn('Shutting down...');
  process.exit();
}

app.listen(port, () => {
  console.warn('Starting App.');
  console.warn(`Magic happens on port ${port}!`);
});
