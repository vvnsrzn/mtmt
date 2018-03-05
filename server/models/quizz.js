const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const quizzSchema = new Schema({

  // id vs userId

  _id: {
    
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  treshold: {
    type: Number,
    min: 0,
    max: 100,
  },
  usersAnswered: {
    type: Array,
  },
  music: {
    answer: {
      type: String,
    },
    hint: {
      type: String,
    },
    badResponses: {
      type: Array
    }
  },
  movie: {
    answer: {
      type: String,
    },
    hint: {
      type: String,
    },
    badResponses: {
      type: Array
    }
  },
  traits: {
    quality: {
      answer: {
        type: String,
      },
      hint: {
        type: String,
      },
      badResponses: {
        type: Array
      }
    },
    defect: {
      answer: {
        type: String,
      },
      hint: {
        type: String,
      },
      badResponses: {
        type: Array
        }
      },
    }, 
}, { 
  timestamps: true
});

const Quizz = mongoose.model('Quizz', quizzSchema);
module.exports = Quizz;