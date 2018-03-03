const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mtmt");
const Quizz = require('../../models/quizz.js');

let quizzDatas = [{
  _id: '5a9531b39f3afa648038ab5d',
  treshold: 75,
  usersAnswered: [],
  music: {
    answer: 'LED ZEP',
    hint: '',
    badResponses: ['NTM', 'IAM', 'DIRE STRAITS']
  },
  venue: {
    answer: 'LED ZEP',
    hint: '',
    badResponses: ['NTM', 'IAM', 'DIRE STRAITS']
  },
  movie: {
    answer: 'LED ZEP',
    hint: '',
    badResponses: ['NTM', 'IAM', 'DIRE STRAITS']
  },
  book: {
    answer: 'LED ZEP',
    hint: '',
    badResponses: ['NTM', 'IAM', 'DIRE STRAITS']
  },
}];

Quizz.create(quizzDatas, (err, quizz) => {
  if (err) {
    throw err;
  }
  else {
    quizz.forEach(quizz => {
      console.log(quizz);
    });
  }
  mongoose.connection.close();
});
