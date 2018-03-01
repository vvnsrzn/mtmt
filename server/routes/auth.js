const express = require('express');
const jwt = require('jwt-simple');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');
const config = require('../config');

const multer = require('multer');
const cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');

// upload images
var storage = multer.diskStorage({
  destination: 'public/images',
})

var upload = multer({
  storage: storage
})

router.post('/upload', upload.single('photos'), function (req, res, next) {
  // console.log(req.body)
  const {
    _id,
  } = req.body;

  User.findByIdAndUpdate(_id, {
    photos: req.file.path
  }, err => {
    if (err) return next(err);
    res.json({
      success: true
    })
  })
});

////////////////////////////////////

router.get(
  '/auth/facebook',
  passport.authenticate('facebook'));

router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/',
    session: false
  }),
  (req, res) => {
    // console.log(req.user.firstName);
    const payload = {
      id: req.user.id,
      firstName: req.user.firstName
    };
    const token = jwt.encode(payload, config.jwtSecret);
    console.log(payload.firstName);
    res.redirect(`http://localhost:8080/auth/facebook/callback?token=${token}&firstName=${payload.firstName}&id=${payload.id}`);
  }
);

router.post(
  '/lookingfor',
  function (req, res, next) {
    const {
      id,
      range,
      gender,
    } = req.body;
    console.log(req.body)

    User.findByIdAndUpdate(id, {
      range: req.body.range,
      gender: req.body.gender
    }, err => {
      if (err) return next(err);
      res.json({
        success: true
      })
    })
  }
)

module.exports = router;