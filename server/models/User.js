const { model, Schema } = require("mongoose");
// const surveySchema = require('./survey');

const userSchema = new Schema({
  username: { 
    type: String, 
    default: null,
    required: true 
  },
  email: { 
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: { 
    type: String,
    required: true,
    len: [8],
    // match: ["^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"]
  },
  company: {
    type: String,
  },
  // savedSurveys: [surveySchema],
  token: { 
    type: String 
  }
});

module.exports = model("user", userSchema);