import gql from 'graphql-tag';

// // boilerplate mutations
export const SIGN_UP = gql`
  mutation Coordinator(firstname: String!, lastname: String!, email: String!, password: String!) {
    Coordinator(firstname: firstname, lastname: lastname, email: email, password: password) {
      token
      Coordinator {
        _id
        firstname
        lastname
        email
        company
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      Coordinator {
        _id
        email
      }
    }
  }
`;

export const CREATE_SURVEY = gql`
  mutation createSurvey(title: String!, description: String!, number_of_questions: Int!) {
    createSurvey(title: String!, description: String!, number_of_questions: Int!) {
      _id
      title
      description
      number_of_questions 
      questions {
        _id
        survey_id
        question
        answers
      }
    }
  }
`;

export const DELETE_SURVEY = gql`
  mutation deleteSurvey($_id: ID!) {
  deleteSurvey(id: $id) {
      _id
      title
      description
      number_of_questions 
      questions {
        _id
        survey_id
        question
        answers
      }
    }
  }
`;

export const CREATE_QUESTION = gql`
  mutation createSurvey(title: String!, description: String!, number_of_questions: Int!) {
    createSurvey(title: $title, description: description!, number_of_questions: number_of_questions!) {
      _id
      survey_id
      question
      answers
      }
    }
  }
`;

export const DELETE_QUESTION = gql`
  mutation deleteQuestion($_id: ID!) {
  deleteQuestion(id: $id) {
      _id
      survey_id
      question
      answers
      }
    }
  }
`;