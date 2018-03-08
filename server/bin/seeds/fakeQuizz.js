const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mtmt");
const Quizz = require("../../models/quizz.js");
const User = require("../../models/user.js");

var faker = require("faker");
var randomArtists = require("./random/randomArtists");
var randomMovies = require("./random/randomMovies");
var quality = require("./random/quality");
var defect = require("./random/defect");

// _id from users
var users = [];
User.find({})
    .select({
        _id: 1
    })
    .limit(100)
    .exec((err, users) => {
        if (err) {
            next(err);
        } else {
            var file = [];
            for (let i = 0; i < 20; i++) {
                let fakeDatas = {
                    userId: faker.random.arrayElement(users),
                    treshold: faker.random.number({ min: 0, max: 100 }),
                    music: {
                        answer: faker.random.arrayElement(randomArtists),
                        badResponses: [
                            faker.random.arrayElement(randomArtists),
                            faker.random.arrayElement(randomArtists),
                            faker.random.arrayElement(randomArtists)
                        ]
                    },
                    movie: {
                        answer: faker.random.arrayElement(randomMovies),
                        badResponses: [
                            faker.random.arrayElement(randomMovies),
                            faker.random.arrayElement(randomMovies),
                            faker.random.arrayElement(randomMovies)
                        ]
                    },
                    traits: {
                        "quality.answer": faker.random.arrayElement(quality),
                        "quality.badResponses": [
                            faker.random.arrayElement(quality),
                            faker.random.arrayElement(quality),
                            faker.random.arrayElement(quality)
                        ],
                        "defect.answer": faker.random.arrayElement(defect),
                        "defect.badResponses": [
                            faker.random.arrayElement(defect),
                            faker.random.arrayElement(defect),
                            faker.random.arrayElement(defect)
                        ]
                    }
                };
                file.push(fakeDatas);
            }

            Quizz.create(file, (err, quizz) => {
                if (err) {
                    throw err;
                } else {
                    quizz.forEach(quizz => {
                        console.log(quizz);
                    });
                }
                mongoose.connection.close();
            });
        }
    });
