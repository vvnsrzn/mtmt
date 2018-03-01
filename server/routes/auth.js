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
var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'folder-name',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(undefined, 'my-file-name');
  }
});

var parser = multer({
  storage: storage
});

router.get('/upload', parser.single('picture'), function (req, res) {
  res.json({
    message: 'hello'
  });
});

router.patch('/upload', parser.single('picture'), function (req, res) {
  console.log(req.files);
  res.json(req.files);
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

module.exports = router;