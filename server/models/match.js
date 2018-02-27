const mongoose = require('mongoose');
const User = require('./user');
const Quizz = require('./quizz');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'Quizz'
  },
  _userA: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _userB: {
    type: Schema.Types.ObjectId,
    ref: 'Quizz'
  },
  status: {
    type: 'string',
    required: true,
    enum: ['pending', 'granted', 'refused']
  },
  createdTime: {
    type: String,
    default: new Date(),
  },
  average: {
    type: Number,
    min: 0,
    max: 1,
  },
  musicAnswer: {
    type: String,
    required: true,
  },
  musicSuccess: {
    type: Boolean,
    required: true,
  },
  movieAnswer: {
    type: String,
    required: true,
  },
  movieSuccess: {
    type: Boolean,
    required: true,
  },
  tripAnswer: {
    type: String,
    required: true,
  },
  tripSuccess: {
    type: Boolean,
    required: true,
  },
  bookAnswer: {
    type: String,
    required: true,
  },
  bookSuccess: {
    type: Boolean,
    required: true,
  },

});

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;