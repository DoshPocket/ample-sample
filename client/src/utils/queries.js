import  gql  from 'graphql-tag';

export const GET_ME = gql `
{
  {
    me {
      _id
      firstName
      lastName
      email
      company
      survey {
        _id
        title
        description
    }
  }
}
`;
