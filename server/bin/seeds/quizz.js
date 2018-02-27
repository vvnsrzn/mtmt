const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mtmt");
const Quizz = require('../../models/quizz.js');

let quizzDatas = [{
  _id: '5a9531b39f3afa648038ab5d',
  treshold: 75,
  usersAnswered: [],
  musicQuestion: "Quel est ton groupe préféré ?",
  musicAnswer: 'LED ZEP',
  musicHint: '',
  musicBadResponses: ['NTM', 'IAM', 'DIRE STRAITS'],
  movieQuestion: "Quel est ton film préféré ?",
  movieAnswer: "Forrest Gump",
  movieHint: "Timmy!",
  movieBadResponses: ['MATRIX', 'LE PERE NOEL', 'LE ROI LION'],
  tripQuestion: "Ta ville de coeur ?",
  tripAnswer: "Toulouse",
  tripHint: "Ô",
  tripBadResponses: ['PERPI', "NEVERS", "LONDRES"],
  bookQuestion: "Ton livre préféré ?",
  bookAnswer: "Le mythe de Syssiphe",
  bookHint: "Pierre qui roule",
  bookBadResponses: ["Oui oui", "Kafka", "Patrick"]
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
