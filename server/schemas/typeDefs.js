const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        me: Coordinator
        users: [Coordinator]
        user(username: String!): Coordinator
    }

    type Coordinator {
        _id: ID!
        firstName: String
        lastName: String
        email: String
        password: String
        company: String
        savedSurveys: [Survey]
    }

    type Survey {
        _id: ID
        title: String
        description: String
        number_of_questions: Int
        questions: [Question]
    }

    input savedSurveys {
        surveyID: String!
        title: String!
        description: String
        number_of_questions: Int
        questions: [savedQuestion]
    }
    
    type Question {
        _id: ID
        question: String
        choices: [Choice]
    }

    input savedQuestion {
        questionID: String!
        question: String!
        choices: [savedChoice]
    }

    type Choice {
        _id: ID
        choice: String
        responseCount: Int
    }

    input savedChoice {
        choiceID: String!
        choice: String!
        responseCount: Int
    }

    type Auth {
        token: ID!
        coordinator: Coordinator
    }
 
    type Mutation {
        addCoordinator(firstName: String!, lastName: String!, email: String!, password: String!, company: String): Auth
        login(email: String!, password: String!): Auth
        createSurvey(title: String!, description: String!, number_of_questions: Int!, input: savedQuestion!): Coordinator
        createQuestion(question: String!, input: savedChoice!): Survey
        createChoice(choice: String!, responseCount: Int): Question
        deleteSurvey(_id: ID!): Coordinator
        deleteQuestion(_id: ID!): Survey
    }
`;

module.exports = typeDefs;

// Currently only query'ing 'me' for authenticated 'users' (aka Coordinators);
