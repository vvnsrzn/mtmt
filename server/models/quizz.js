const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const quizzSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  treshold: {
    type: Number,
    min: 0,
    max: 100,
  },
  usersAnswered: {
    type: Array,
  },
  musicQuestion: {
    type: Array,
    required: true
  },
  musicAnswer: {
    type: String,
    required: true,
  },
  musicHint: {
    type: String,
  },
  musicBadResponses: {
    type: Array,
  },
  movieQuestion: {
    type: Array,
    required: true
  },
  movieAnswer: {
    type: String,
    required: true,
  },
  movieHint: {
    type: String,
  },
  movieBadResponses: {
    type: Array,
  },
  tripQuestion: {
    type: Array,
    required: true
  },
  tripAnswer: {
    type: String,
    required: true,
  },
  tripHint: {
    type: String,
  },
  tripBadResponses: {
    type: Array,
  },
  bookQuestion: {
    type: Array,
    required: true
  },
  bookAnswer: {
    type: String,
    required: true,
  },
  bookHint: {
    type: String,
  },
  bookBadResponses: {
    type: Array,
  },
});

const Quizz = mongoose.model('Quizz', quizzSchema);
module.exports = Quizz;