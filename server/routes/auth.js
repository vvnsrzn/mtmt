const express = require('express');
const jwt = require('jwt-simple');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');
const config = require('../config');

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/', session: false }),
  (req, res) => {
    console.log(req.user);
    const payload = {
      id: req.user.id,
    };
    const token = jwt.encode(payload, config.jwtSecret);
    res.json({ token });
  }
);

module.exports = router;