const db = require('../config/connection');
// Coordinator great-grandparent/ Model
const { User } = require('../models');
const userSeed = require('./userData.json');
// // surveySchema grandparent / Schema
// const { surveySchema } = require('../models');
// const surveySeed = require('./surveyData.json');
// // questionSchema parent / Schema
// const { questionSchema } = require('../models');
// const questionSeed = require('./questionData.json');
// // choiceSchema child / Schema
// const { choiceSchema } = require('../models');
// const choicesSeed = require('./choicesData.json');

db.once('open', async () => {
    try {
      // await User.deleteMany({});
      await User.create(userSeed);
      console.log('Coordinators seeded!');
 
// unable to batch delete/add schemas that are mutatations
      // await surveySchema.deleteMany();
      // await surveySchema.create(surveySeed);
      // console.log('Surveys seeded!');

      // await questionSchema.deleteMany({});
      // await questionSchema.create(questionSeed);
      // console.log('Questions seeded!');

      // await choiceSchema.deleteMany({});
      // await choiceSchema.create(choicesSeed);
      // console.log('Answers seeded!');

      process.exit(0);
    } catch (err) {
      throw err;
    }
});