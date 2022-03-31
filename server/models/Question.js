const { Schema } = require('mongoose');
const choiceSchema = require('./choice');

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  choices: [choiceSchema],
});

// const Question = model('Question', questionSchema);

module.exports = questionSchema;

