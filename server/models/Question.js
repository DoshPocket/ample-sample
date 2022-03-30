const { Schema, model } = require('mongoose');
const choicesSchema = require('./choices');

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  choices: [choicesSchema],
});

// const Question = model('Question', questionSchema);

module.exports = questionSchema;

