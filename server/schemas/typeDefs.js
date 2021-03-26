const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    symptoms: [Symptom]
  }

type Auth {
    token: ID!
    user: User
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSymptom(symptomText: String!): 'Symptom'
    submitForm()

  }
`;
// TODO ^^ we need to build out the submitForm() mutation

module.exports = typeDefs;
