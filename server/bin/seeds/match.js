const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mtmt");
const Match = require('../../models/match.js');

let MatchDatas = [{
  _id: '5a9531b39f3afa648038ab5d',
  _userA: '5a9531b39f3afa648038ab5d',
  _userB: '5a9531b39f3afa648038ab5e',
  createdTime: new Date,
  average: '0.75',
  musicAnswer: 'LED ZEP',
  musicSuccess: true,
  movieAnswer: 'Forrest Gump',
  movieSuccess: true,
  tripAnswer: 'Toulouse',
  tripSuccess: true,
  bookAnswer: 'Oui oui',
  bookSuccess: false,
}];

Match.create(MatchDatas, (err, match) => {
  if (err) {
    throw err;
  }
  else {
    match.forEach(match => {
      console.log(match);
    });
  }
  mongoose.connection.close();
});