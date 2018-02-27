const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mtmt");
const Chat = require('../../models/chat.js');

let ChatDatas = [{
  _id: '5a9531b39f3afa648038ab8f',
  createdAt: new Date(),
  message: 'yolo?',
  details: {
    sentAt: new Date(),
    sentBy: '5a9531b39f3afa648038ab5e'
  }
}];

Chat.create(ChatDatas, (err, chat) => {
  if (err) {
    throw err;
  }
  else {
    chat.forEach(chat => {
      console.log(chat);
    });
  }
  mongoose.connection.close();
})