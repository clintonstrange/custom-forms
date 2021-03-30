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
    screenings: [Screenings]
    screening(_id: ID!): Screenings
    controls: [Control]
    control(_id: ID!): Control
  }

  type Control {
    _id: ID
    documentor: String
    screenNum: [Int]
    credentials: String
    dateTime: String
    createdAt: String
  }

  type Screenings {
    _id: ID
    control: Control
    symptoms: String
    contact: String
    positiveTest: String
    travel: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!
      email: String!
      role: String!
      password: String!
    ): Auth
    addControl(
      documentor: String!
      screenNum: Int!
      credentials: String!
      dateTime: String!
    ): Control
    addScreening(
      control: ID!
      symptoms: String!
      contact: String!
      positiveTest: String!
      travel: String!
    ): Screenings
    submitForm(formId: ID!, form: String!): Screenings
  }
`;

module.exports = typeDefs;
