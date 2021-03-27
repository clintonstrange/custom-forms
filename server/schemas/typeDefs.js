const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    role: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    users: [User]
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, role: String!, password: String!): Auth
  }
`;
// TODO ^^ we need to build out the submitForm() mutation

module.exports = typeDefs;
