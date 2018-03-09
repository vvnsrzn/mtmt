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
    const payload = {
      id: req.user.id,
      firstName: req.user.firstName
    };
    const token = jwt.encode(payload, config.jwtSecret);
    console.log(payload.firstName);
    res.redirect(`http://mtmt.herokuapp.com/auth/facebook/callback?token=${token}&firstName=${payload.firstName}&id=${payload.id}`);
  }
);

module.exports = router;