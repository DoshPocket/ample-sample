const { gql } = require('apollo-server');

const typeDefs = gql`
type User {
    username: String,
    email: String,
    password: String,
    token: String,
    company: String,
    savedSurveys: [Survey]
}

input RegisterInput {
    username: String,
    email: String,
    password: String 
    confirmPassword: String
}

input LoginInput {
    email: String,
    password: String 
}

# type Survey {
#     _id: ID
#     title: String
#     description: String
#     questions: [Question]
# }

# input savedSurveys {
#     _id: ID
#     title: String
#     description: String
#     questions: [savedQuestion]
# }

# type Question {
#     _id: ID
#     question: String
#     choices: [Choice]
# }

# input savedQuestion {
#     questionID: String
#     question: String
#     choices: [savedChoice]
# }

# type Choice {
#     _id: ID
#     choice: String
#     responseCount: Int
# }

# input savedChoice {
#     questionID: String!
#     choice: String!
#     responseCount: Int
# }

type Query {
    user(id: ID!): User
}

type Mutation {
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
    # createSurvey(title: String!, description: String!, input: savedQuestion!): Survey
    # createQuestion(question: String!, input: savedChoice!): Survey
    # createChoice(choice: String!, responseCount: Int): Question
    # deleteSurvey(_id: ID!): User
    # deleteQuestion(_id: ID!): Survey
}
`;

module.exports = typeDefs;