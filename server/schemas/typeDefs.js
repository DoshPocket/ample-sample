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
`;

module.exports = typeDefs;
