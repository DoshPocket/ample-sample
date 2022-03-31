const { Schema } = require('mongoose');

const choiceSchema = new Schema({
    choice: {
        type: String,
        required: true
    },
    responseCount: {
        type: Number,
        default: 0,
        required: true
    },
});

module.exports = choiceSchema;