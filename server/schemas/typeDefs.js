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

<<<<<<< HEAD
	type Screening {
		_id: ID
		symptoms: String
		contact: Boolean
		positiveTest: Boolean
		travel: String
	}
=======
  type Query {
    user: User
    users: [User]
    me: User
  }
>>>>>>> ad1e4feb2dd10033af02e7a4f2e326d754e9b5c3

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
  }
`;

module.exports = typeDefs;
