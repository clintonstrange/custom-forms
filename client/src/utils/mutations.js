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
