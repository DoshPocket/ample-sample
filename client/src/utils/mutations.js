import gql from 'graphql-tag';

export const ADD_COORDINATOR = gql`
mutation addCoordinator($firstName: String!, $lastName: String!, $email: String!, $password: String!, $company: String) {
  addCoordinator(firstName: $firstName, lastName: $lastName email: $email, password: $password, company: $company) {
    token
    coordinator {
      _id
      email
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      coordinator {
        _id
        email
      }
    }
  }
`;

export const CREATE_SURVEY = gql`
  mutation createSurvey($title: String!, $description: String!, $number_of_questions: Int!, $input: savedQuestion!) {
    createSurvey(title: $title, description: $description, number_of_questions: $number_of_questions, input: $input) {
      _id
      title
      description
      number_of_questions 
      savedQuestion {
        _id
        question
        savedChoice {
          _id
          choice
          responseCount
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
      number_of_questions 
      savedQuestion {
        _id
        question
        savedChoice {
          _id
          choice
          responseCount
        }
      }
    }
  }
`;

export const CREATE_QUESTION = gql`
  mutation createQuestion($question: String!, $input: savedChoice) {
    createQuestion(question: $question, input: $input) {
      _id
      question
      savedChoice {
        _id
        choice
        responseCount
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
      savedChoice {
        _id
        choice
        responseCount
      }
    }
  }
`;

export const CREATE_CHOICE = gql`
  mutation createChoice($choice: String!) {
    createChoice(choice: $choice) {
      _id
      choice
      responseCount
    }
  }
`;