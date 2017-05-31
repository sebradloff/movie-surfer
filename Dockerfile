FROM mhart/alpine-node:7.10.0

COPY . /app
WORKDIR /app

RUN npm install

ARG MOVIE_DB_API_KEY

EXPOSE 8080
