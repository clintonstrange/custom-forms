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

export const QUERY_SCREENINGS = gql`
{
    screenings {
      _id
      symptoms
      contact
      positiveTest
      travel
      # control {
      #   documentor
      #   credentials
      # }
    }
}
`;
