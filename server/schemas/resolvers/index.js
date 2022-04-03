const usersResolvers = require('./users');
const typeDefs = require('../typeDefs');
const surveyResolvers = require('./surveys');

module.exports = { typeDefs, usersResolvers, surveyResolvers };
//     Query: {
//         ...usersResolvers.Query
//     },
//     Mutation: {
//         ...usersResolvers.Mutation
//     },
// };