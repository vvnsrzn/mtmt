const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  facebookId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'pending',
    enum: ['pending', 'granted', 'killed']
  },
  gender: {
    type: String,
    required: true,
    enum: ['1', '2']
  },
  lookingFor: {
    type: String,
    enum: ['1', '2']
  },
  firstName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 99,
  },
  bio: {
    type: String,
    maxlength: 280
  },
  work: {
    type: String,
    maxlength: 70,
  },
  mail: {
    type: String,
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 12
  },
  photos: {
    type: String,
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
  updatedAt: {
    type: String,
    default: new Date(),
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;