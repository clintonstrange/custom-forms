const { gql } = require('apollo-server-express');

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
# some how add date, createdAt, and screenNum to type Control
  type Control {
    documentor: String
    credentials: String
  }

  type Screenings {
		_id: ID
		symptoms: String
		contact: String
		positiveTest: String
		travel: String
    control: Control
	}

  type Query {
    user: User
    users: [User]
    me: User
    screenings: [Screenings]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!
      email: String!
      role: String!
      password: String!
    ): Auth
    addScreening(
      symptoms: String!
      contact: String!
      positiveTest: String!
      travel: String!
    ): Screenings
    submitForm(formId: ID!, form: String!): Screenings
  }
`;

module.exports = typeDefs;
