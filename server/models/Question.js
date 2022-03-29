const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  response: {
    type: Number,
    required: true,
  },
});

const Question = model('Question', questionSchema);

module.exports = Question;