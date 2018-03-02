var SpotifyWebApi = require('spotify-web-api-node');
var express = require('express');
var app = express();

// Remember to paste here your credentials
var clientId = '20160c41f58543b9805c1dc5dcf640e1',
    clientSecret = 'c9ccb36592b8436395e68c7f6149fc02';

var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
    .then(function (data) {
        spotifyApi.setAccessToken(data.body['access_token']);
    }, function (err) {
        console.log('Something went wrong when retrieving an access token', err);
    });

app.get('/artist/:id', (req, res, next) => {
    console.log(req.params)
    spotifyApi.searchArtists(req.params.id)
        .then(function (data) {
            res.json({
                name: req.query.artist,
                songs: data.body.artists.items,
                href: data.body.artists.href,
                artists: data
            });
        }, function (err) {
            console.error(err);
        });
})

module.exports = app;