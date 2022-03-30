const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Survey {
        _id: ID!
        title: String
        description: String
        number_of_questions: Int
        questions: [Question]
    }

    type Question {
        _id: ID!
        survey: ID
        question: String
        answers: [answer]
        `
        //answers: [answer] not sure if this is needed?
        `
    }

    type Coordinator {
        _id: ID!
        firstname: String
        lastname: String
        email: String
        password: String
        company: String
        surveys: [survey]
    }
    type Mutation {
        createSurvey(title: String!, description: String!, number_of_questions: Int!): Coordinator
        createQuestion( question: String!, answers: String!): Survey
        login(email: String!, password: String!): Auth
        signup(firstname: String!, lastname: String!, email: String!, password: String!): Auth
        deleteSurvey(_id: ID!): Coordinator
        deleteQuestion(_id: ID!): Survey
    }
    type Query {
        me: Coordinator
        users: [Coordinator]
        user(username: String!): Coordinator
      }

    type Auth {
        token: ID!
        coordinator: Coordinator
    }

`;

module.exports = typeDefs;

// Currently only query'ing 'me' for authenticated 'users' (aka Coordinators);
