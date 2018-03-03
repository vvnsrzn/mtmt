// var SpotifyWebApi = require('spotify-web-api-node');
var express = require('express');
var app = express();
const mdb = require('moviedb')('3d7f6b0a3e8aff103e1d5c918c9c8a07');

app.get('/movie/:id', (req,res, next) => {
  console.log(req.params)
  mdb.searchMovie({
    query: req.params.id
  },
  (err, data) => {
    console.log(data)
    res.json(data);
  });
})

module.exports = app;