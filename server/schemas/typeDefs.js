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

<<<<<<< HEAD
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSymptom(symptomText: String!): 'Symptom'
    submitForm()
=======
  type Query {
    user: User
    users: [User]
  }
>>>>>>> 141d8675ee7f5dde1dfc10a43769f9adb6c418b9

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, role: String!, password: String!): Auth
  }
`;
// TODO ^^ we need to build out the submitForm() mutation

module.exports = typeDefs;
