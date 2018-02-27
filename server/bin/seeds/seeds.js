const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mtmt");

require('./chats');
require('./matches');
require('./quizz');
require('./users');