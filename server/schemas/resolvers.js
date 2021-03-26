const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

//this file will be the engine for being able to add things like symptoms to the data base if you are an authenticated user (admin user)

const resolvers = {
  // Query: {
  //   me: async (parent, args, context) => {
  //     if (context.user) {
  //       const userData = await User.findOne({ _id: context.user._id })
  //         .select('-__v -password')
  //         .populate('thoughts')
  //         .populate('friends');

  //       return userData;
  //     }

  //     throw new AuthenticationError('Not logged in');
  //   },
  //   users: async () => {
  //     return User.find()
  //       .select('-__v -password')
  //       .populate('thoughts')
  //       .populate('friends');
  //   },
  //   user: async (parent, { username }) => {
  //     return User.findOne({ username })
  //       .select('-__v -password')
  //       .populate('friends')
  //       .populate('thoughts');
  //   },
  // },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    // addFriend: async (parent, { friendId }, context) => {
    //   if (context.user) {
    //     const updatedUser = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { friends: friendId } },
    //       { new: true }
    //     ).populate('friends');

    //     return updatedUser;
    //   }

    //   throw new AuthenticationError('You need to be logged in!');
    // }
  },
};

module.exports = resolvers;
