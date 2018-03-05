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

router.post('/api/lookingfor', function (req, res, next) {
    const {
      id,
      gender,
      range,
      lookingForGender,
    } = req.body;
    console.log(req.body.gender)

    User.findByIdAndUpdate(id, {
      gender: req.body.gender,
      lookingForRange: req.body.range,
      lookingForGender: req.body.lookingForGender,
      age: req.body.age,
      bio: req.body.bio
    }, err => {
      if (err) return next(err);
      res.json({
        success: true
      })
    })
  }
)

router.post('/api/quizzmusic', function( req, res, next) {
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
      res.json({
        message: 'bravo patrick'
      })
    }
  });
})

router.post('/api/sendtraits', function( req, res, next) {
  Quizz.findByIdAndUpdate(req.body._id, {$set : {
      traits : {
        quality: {
          answer: req.body.traits.quality.answer,
          hint: req.body.traits.quality.hint   
        },
        defect: {
          answer: req.body.traits.defect.answer,
          hint: req.body.traits.defect.hint
        },
      }  
    },
  },
  {
    upsert: true
  },
  (err, quizz) => {
    if (err) {
      next(err);
    } else {
      res.json({
        message: 'bravo patrick!'
      })
    }
  });
})


module.exports = router;