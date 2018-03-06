const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Quizz = require('./quizz');

const userSchema = new Schema({
  facebookId: {
    type: String,
    // required: true
  },
  quizzId: {
    type: Schema.Types.ObjectId,
    ref: 'Quizz',
  },
  status: {
    type: String,
    // required: true,
    default: 'pending',
    enum: ['pending', 'granted', 'killed']
  },
  swiped: [{
    liked: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    ignored: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  gender: {
    type: String,
    // required: true,
    enum: ['male', 'female']
  },
  lookingForGender: {
    type: String,
    enum: ['male', 'female']
  },
  work: {
    type: String,
  },
  lookingForRange: [{
      min: {
        type: Number,
        min: 18,
        max: 99,
      },
      max: {
        type: Number,
        min: 18,
        max: 99,
      },
    }
  ],
  firstName: {
    type: String,
    // required: true,
  },
  age: {
    type: Number,
    // required: true,
    min: 18,
    max: 99,
  },
  bio: {
    type: String,
    maxlength: 280
  },
  job: {
    type: String,
    maxlength: 70,
  },
  mail: {
    type: String,
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 14
  },
  photos: [
    String,
  ],
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;