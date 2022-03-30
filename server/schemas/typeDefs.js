const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Survey {
        _id: ID!
        title: String
        description: String
        number_of_questions: Int
        questions: [question]
    }

    type Question {
        _id: ID!
        question: String
        choices: [choice]
    }

    type Choice {
        _id: ID!
        choice: String || Int
        responseCount: Int
    }

    type Coordinator {
        _id: ID!
        firstName: String
        lastName: String
        email: String
        password: String
        company: String
        surveys: Array
    }

    type Mutation {
        createSurvey(title: String!, description: String!, number_of_questions: Int!, surveys: Array!): Coordinator
        createQuestion( question: String!, choices: Array!): Survey
        login(email: String!, password: String!): Auth
        signup(firstName: String!, lastName: String!, email: String!, password: String!): Auth
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
