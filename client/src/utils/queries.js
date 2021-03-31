import gql from "graphql-tag";

export const QUERY_USER = gql`
  {
    user {
      username
      email
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
    }
  }
`;

export const QUERY_CONTROL = gql`
  {
    controls {
      _id
      documentor
      screenNum {
        _id
        symptoms
        contact
        positiveTest
        travel
      }
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
