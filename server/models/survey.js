const { Schema } = require('mongoose');
const questionSchema = require('./question');

const surveySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  number_of_questions: {
    type: Number,
    default: 0,
  },
  questions: [questionSchema],
});

// const Survey = model('Survey', surveySchema);

module.exports = surveySchema;