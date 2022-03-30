const { Schema } = require('mongoose');

const choicesSchema = new Schema({
    choice: {
        type: String || Number,
        required: true
    },
    responseCount: {
        type: Number,
        default: 0,
        required: true
    },
});

module.exports = choicesSchema;