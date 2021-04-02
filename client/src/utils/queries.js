import gql from "graphql-tag";

export const QUERY_USER = gql`
  {
    user {
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      email
      role
    }
  }
`;

export const QUERY_CONTROL = gql`
  {
    controls {
      _id
      documentor
      credentials
    }
  }
`;

export const QUERY_SCREENINGS = gql`
  {
    screenings {
      _id
      control {
        _id
        documentor
        credentials
      }
      symptoms
      contact
      positiveTest
      travel
      screenDate
      createdAt
    }
  }
`;
