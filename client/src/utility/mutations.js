import gql from 'graphql-tag';

export const REGISTER_USER = gql`
mutation registerUser($registerInput: RegisterInput!) {
  registerUser(registerInput: $registerInput) {
    token
    user {
      _id
      username
      email
      company
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation loginUser($loginInput: LoginInput!) {
    loginUser(loginInput: $loginInput) {
      token
      user {
        _id,
        email, 
        company,
        savedSurveys
      }
    }
  }
`;

export const CREATE_SURVEY = gql`
  mutation createSurvey($title: String!, $description: String!, $input: savedQuestion!) {
    createSurvey(title: $title, description: $description, input: $input) {
      _id,
      title,
      description,
      questions {
        _id,
        question,
        choices {
          _id,
          choice
        }
      }
    }
  }
`;

export const DELETE_SURVEY = gql`
  mutation deleteSurvey($_id: ID!) {
  deleteSurvey(_id: $_id) {
      _id
      title
      description
      questions {
        _id
        question
        choices {
          _id
          choice
          responseCount
        }
      }
    }
  }
`;

//questions and choices are created dynamically in the front end when you click to add question- the question and it's choices will be instantiated; The survey will be updated to add the question(s)
// export const CREATE_QUESTION = gql`
//   mutation createQuestion($question: String!, $input: savedChoice) {
//     createQuestion(question: $question, input: $input) {
//       _id
//       question
//       savedChoice {
//         _id
//         choice
//         responseCount
//       }
//     }
//   }
// `;

// export const DELETE_QUESTION = gql`
//   mutation deleteQuestion($_id: ID!) {
//   deleteQuestion(id: $id) {
//       _id
//       survey_id
//       question
//       savedChoice {
//         _id
//         choice
//         responseCount
//       }
//     }
//   }
// `;

// export const CREATE_CHOICE = gql`
//   mutation createChoice($choice: String!) {
//     createChoice(choice: $choice) {
//       _id
//       choice
//       responseCount
//     }
//   }
// `;