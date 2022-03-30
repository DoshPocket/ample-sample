const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Survey {
        _id: ID!
        title: String!
        description: String!
        number_of_questions: Int!
        questions: [Question]
    }

    type Question {
        _id: ID!
        survey: ID!
        question: String!
    }

    type Coordinator {
        _id: ID!
        firstname: String!
        lastname: String!
        email: String!
        password: String!
        comapny: String
    }
    type Mutation {
        createSurvey(title: String!, description: String!, number_of_questions: Int!): Survey
        createQuestion(survey: ID!, question: String!): Question
        login(email: String!, password: String!): Auth
        signup(username: String!, email: String!, password: String!): Auth
        deleteSurvey(survey: ID!): Survey
        deleteQuestion(question: ID!): Question
    }
    type Query {
        me: Coordinator
        users: [Coordinator]
        user(username: String!): Coordinator
      }

    type Auth {
        token: String!
        user: Coordinator!
    }

`;

module.exports = typeDefs;

