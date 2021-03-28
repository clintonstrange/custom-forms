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

  type Screening {
		_id: ID
		symptoms: String
		contact: Boolean
		positiveTest: Boolean
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
		submitForm(formId: ID!, form: String!): Screening
`;
// TODO ^^ we need to build out the submitForm() mutation

module.exports = typeDefs;
