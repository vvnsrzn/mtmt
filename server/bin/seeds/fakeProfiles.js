const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mtmt");
const User = require('../../models/user.js');

var faker = require('faker');
faker.locale = "fr";

var file = [];
for (let i = 0; i < 20000; i++) {
  
  let fakeDatas = {
    facebookId: faker.random.number(),
    status: 'granted',
    gender: faker.random.arrayElement(['male', 'female']),
    lookingForGender: faker.random.arrayElement(['male', 'female']),
    lookingForRange: {'min' : faker.random.number({min:18, max:24}), 'max' : faker.random.number({min:32, max:49})},
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