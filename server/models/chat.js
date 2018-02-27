const mongoose = require('mongoose');
const User = require('./user');
const Match = require('./match');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'Match'
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
  message: {
    type: String,
  },
  details: {
    sentAt: {
      type: String,
      default: new Date(),
    },
    sentBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
})

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;