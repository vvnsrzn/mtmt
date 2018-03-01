const express = require('express');
const router = express.Router();
const passport = require('passport');
const multer = require('multer');
const upload = multer({
  dest: './public/uploads/'
});
const User = require('../models/user');

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

module.exports = router;