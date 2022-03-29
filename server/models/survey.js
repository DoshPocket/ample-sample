const { Schema, model } = require('mongoose');

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
});

const Survey = model('Survey', surveySchema);

module.exports = Survey;