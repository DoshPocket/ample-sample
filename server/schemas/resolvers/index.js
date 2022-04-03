// const usersResolvers = require('./users');
const typeDefs = require('../typeDefs');


const usersResolvers = require('./users');

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