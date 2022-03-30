import gql from 'graphql-tag';

// // boilerplate mutations
export const ADD_COORDINATOR = gql`
  mutation addCoordinator($firstname: String!, $lastname: String!, $email: String!, $password: String!, $company: String!) {
    addCoordinator(firstname: $firstname, lastname: $lastname, email: $email, password: $password, company: $company) {
      token
      coordinator {
        _id
        email
      }
    }
  }
`;


// export const ADD_USER = gql`
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;





// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       Coordinator {
//         _id
//         email
//       }
//     }
//   }
// `;

// export const CREATE_SURVEY = gql`
//   mutation createSurvey(title: String!, description: String!, number_of_questions: Int!) {
//     createSurvey(title: String!, description: String!, number_of_questions: Int!) {
//       _id
//       title
//       description
//       number_of_questions 
//       questions {
//         _id
//         survey_id
//         question
//         answers
//       }
//     }
//   }
// `;

// export const DELETE_SURVEY = gql`
//   mutation deleteSurvey($_id: ID!) {
//   deleteSurvey(id: $id) {
//       _id
//       title
//       description
//       number_of_questions 
//       questions {
//         _id
//         survey_id
//         question
//         answers
//       }
//     }
//   }
// `;

// export const CREATE_QUESTION = gql`
//   mutation createSurvey(title: String!, description: String!, number_of_questions: Int!) {
//     createSurvey(title: $title, description: description!, number_of_questions: number_of_questions!) {
//       _id
//       survey_id
//       question
//       answers
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
//       answers
//       }
//     }
//   }
// `;