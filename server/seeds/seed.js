const db = require('../config/connection');
// Coordinator great-grandparent/ Model
const { Coordinator } = require('../models');
const coordSeed = require('./coordData.json');
// // Survey grandparent / Schema
// const { Survey } = require('../models');
// const surveySeed = require('./surveyData.json');
// // Question parent / Schema
// const { Question } = require('../models');
// const questionSeed = require('./questionData.json');
// // Choices child / Schema
// const { Choices } = require('../models');
// const choicesSeed = require('./choicesData.json');

db.once('open', async () => {
    try {
      await Coordinator.deleteMany({});
      await Coordinator.create(coordSeed);
      console.log('Coordinators seeded!');
      
      // await Survey.deleteMany({});
      // await Survey.create(surveySeed);
      // console.log('Surveys seeded!');

      // await Question.deleteMany({});
      // await Question.create(questionSeed);
      // console.log('Questions seeded!');

      // await Choices.deleteMany({});
      // await Choices.create(answerSeed);
      // console.log('Answers seeded!');

      process.exit(0);
    } catch (err) {
      throw err;
    }
});

