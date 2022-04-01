const usersResolvers = require('./users');
const surveysResolvers = require('./surveys');

module.exports = {
    Query: {
        ...usersResolvers.Query,
        // ...surveysResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...surveysResolvers.Mutation
    },
};