// // ONLY 1 TYPE OF USER CURRENTLY; CAN BE REPURPOSED WHEN WE HAVE ALT USER TYPES
// const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');
// const surveySchema = require('./survey');

// const coordinatorSchema = new Schema({
//   firstName: {
//     type: String,
//     required: true,
//     },
//   lastName: {
//     type: String,
//     required: true,
//     },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/.+@.+\..+/, 'Must use a valid email address'],
//     },
//   password: {
//     type: String,
//     required: true,
//     len: [8],
//     },
//   company: {
//     type: String,
//   },
//   savedSurveys: [surveySchema],
// },
// {
//   toJSON: {
//     virtuals: true,
//   },
// }
// );

// // set up pre-save middleware to create password
// coordinatorSchema.pre('save', async function(next) {
//     if (this.isNew || this.isModified('password')) {
//       const saltRounds = 10;
//       this.password = await bcrypt.hash(this.password, saltRounds);
//     }
  
//     next();
//   });
  
//   // compare the incoming password with the hashed password
//   coordinatorSchema.methods.isCorrectPassword = async function(password) {
//     return await bcrypt.compare(password, this.password);
//   };

// const Coordinator = model('Coordinator', coordinatorSchema);

// module.exports = Coordinator;