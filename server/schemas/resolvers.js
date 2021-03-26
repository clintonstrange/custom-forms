const { AuthenticationError } = require('apollo-server-express');
const { User, Proctor, Screening } = require('../models');
const { signToken } = require('../utils/auth');

//this file will be the engine for being able to add things like symptoms to the data base if you are an authenticated user (admin user)

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select(
					'-__v -password'
				);
				// .populate('thoughts')
				// .populate('friends');

				return userData;
			}

			throw new AuthenticationError('Not logged in');
		},
		users: async () => {
			return User.find().select('-__v -password');
			// .populate('thoughts')
			// .populate('friends');
		},
		user: async (parent, { username }) => {
			return User.findOne({ username }).select('-__v -password');
			// .populate('friends')
			// .populate('thoughts');
		}
	},

	Mutation: {
		// this is for the signup
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const token = signToken(user);
			return { token, user };
		},

		// ! Does this go in a separate mutation since it's not directly related to the user? Or does it stay here because it's related to the form which is directly related to the user?
		addSymptom: async (parent, { symptomId }, context) => {
			if (context.symptom) {
				const updatedSymptom = await updatedSymptom
					.findOneAndUpdate(
						{ _id: context.symptom._id },
						{ $addToSet: { symptoms: symptomId } },
						{ new: true }
					)
					.populate('symptoms');

				return updatedSymptom;
			}

			throw new AuthenticationError('You need to be logged in!');
		}

		// ! can we re-purpose this for adding a user based on a specific role?
		/* addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    } */

		// TODO: need to add a submitForm mutation
	}
};

module.exports = resolvers;
