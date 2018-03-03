const express = require('express');
const router = express.Router();
const passport = require('passport');
const multer = require('multer');
const upload = multer({
  dest: './public/uploads/'
});
const User = require('../models/user');
const Quizz = require('../models/quizz');

router.post('/profile', upload.single('photo'), function (req, res, next) {
  User.findByIdAndUpdate(req.user._id, {
      photos: '/uploads/' + req.file.filename
    },
    (err, user) => {
      if (err) {
        next(err);
      } else {
        res.redirect(`http://localhost:8080/lookingfor`);
      }
    });
});

router.post('/api/quizzmusic', function( req, res, next) {
  console.log(req.body)
  Quizz.findByIdAndUpdate(req.body._id, {
    music: {
      answer: req.body.artist,
      hint: req.body.hint
    },
  },
  {
    upsert: true
  },
  (err, quizz) => {
    if (err) {
      next(err);
    } else {
      // console.log(quizz)
      res.json({
        message: 'bravo patrick'
      })
    }
  });
})

router.post('/api/quizzmovie', function( req, res, next) {
  Quizz.findByIdAndUpdate(req.body._id, {
    movie: {
      answer: req.body.movie,
      hint: req.body.hint
    },
  },
  {
    upsert: true
  },
  (err, quizz) => {
    if (err) {
      next(err);
    } else {
      // console.log(quizz)
      res.json({
        message: 'bravo patrick'
      })
    }
  });
})

module.exports = router;