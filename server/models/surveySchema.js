//THIS SCHEMA IS FOR API STUFF

const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const SurveySchema = new Schema({
    title: String,
    description: String,
    questions: String,
    choiceA: String,
    choiceB: String,
    choiceC: String,
    choiceD: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const Survey = mongoose.model('Survey', SurveySchema);

module.exports =  Survey;