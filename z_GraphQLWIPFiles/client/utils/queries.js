import  gql  from 'graphql-tag';

export const GET_USER = gql `
  {
    user {
      _id
      username
      email
      company
      savedSurveys {
            _id
            title
            description
            questions {
                _id
                question
                choices {
                    _id
                    choice
                }

            }
      }
    }
}
`;

// export const GET_SURVEY = gql `
// `
