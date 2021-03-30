import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        role
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $role: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      role: $role
      password: $password
    ) {
      token
      user {
        _id
        username
        role
        email
      }
    }
  }
`;

export const ADD_SCREENING = gql`
  mutation addScreening(
    $control: ID!
    $symptoms: String!
    $contact: String!
    $positiveTest: String!
    $travel: String!
    $screenDate: String!
  ) {
    addScreening(
      control: $control
      symptoms: $symptoms
      contact: $contact
      positiveTest: $positiveTest
      travel: $travel
      screenDate: $screenDate
    ) {
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
    }
  }
`;

export const ADD_CONTROL = gql`
  mutation addControl(
    $documentor: String!
    $screenNum: Int!
    $credentials: String!
  ) {
    Control(
      documentor: $documentor
      screenNum: $screenNum
      credentials: $credentials
    )
  }
`;
