const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mtmt");
const User = require('../../models/user.js');

var faker = require('faker');
faker.locale = "fr";
var fs = require('fs');

var file = [];
for (let i = 0; i < 10000; i++) {
  
  let fakeDatas = {
    facebookId: faker.random.number(),
    status: 'granted',
    gender: faker.random.arrayElement(['male', 'female']),
    lookingFor: faker.random.arrayElement(['male', 'female']),
    firstName: faker.name.firstName(),
    age: faker.random.number({min:18, max:49}),
    bio: 'Je suis un faux compte et je le vis bien.',
    work: faker.company.companyName(),
    mail: faker.internet.exampleEmail(),
    phone: faker.phone.phoneNumber(),
    photos: faker.image.avatar(),
  }

  file.push(fakeDatas)
}

// fs.writeFile('fakesProfiles1000.json', file, 'utf8', function (err, datas) {
//   if (err) {
//     throw err
//   }
//   else {
//     console.log('File saved!')
//   }
// })

User.create(file, (err, user) => {
  if (err) {
    throw err;
  } else {
    user.forEach(user => {
      console.log(user);
    });
  }
  mongoose.connection.close();
});