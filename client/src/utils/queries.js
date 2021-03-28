import gql from "graphql-tag";

export const QUERY_USER = gql`
  {
    user {
      username
      email
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      role
    }
  }
`;

export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    role
    Screening {
      _id
      symptoms
      contact
      positiveTest
      travel
    }
  }
}
`;
