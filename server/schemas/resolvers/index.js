// const usersResolvers = require('./users');
const typeDefs = require('../typeDefs');
// const surveyResolvers = require('./surveys');

// module.exports = { typeDefs, usersResolvers, surveyResolvers };
//     Query: {
//         ...usersResolvers.Query
//     },
//     Mutation: {
//         ...usersResolvers.Mutation
//     },
// };


const usersResolvers = require('./users');
const surveysResolvers = require('./surveys');

module.exports = {
    Query: {
        ...usersResolvers.Query,
        // ...surveysResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        // ...surveysResolvers.Mutation
    },
    // typeDefs,
    // surveysResolvers
};