const { AuthenticationError } = require("apollo-server-express");
const { User, Control, Screenings } = require("../models");
const { signToken } = require("../utils/auth");

//this file will be the engine for being able to add things like symptoms to the data base if you are an authenticated user (admin user)

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-__v -password");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
    screenings: async () => {
      return await Screenings.find();
    },
    screening: async (parent, { _id }) => {
      return await Screenings.findOne({ _id });
    },
    controls: async () => {
      return await Control.find();
    },
    control: async (parent, { _id }) => {
      return await Control.findOne({ _id });
    },
  },

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
    submitForm: async (parent, args, context) => {
      if (context.user) {
        const form = await Screening.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { screenings: form._id } },
          { new: true }
        );
        return form;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addScreening: async (parent, args) => {
      //console.log(args.control);
      const controlId = args.control;
      //console.log(controlId);
      const control = await Control.findById({ _id: controlId });
      //console.log(control);

      const screenings = await Screenings.create({
        control: {
          _id: control._id,
        },
        symptoms: args.symptoms,
        contact: args.contact,
        positiveTest: args.positiveTest,
        travel: args.travel,
      });

      console.log(screenings);

      return screenings;
    },
    addControl: async (parent, args) => {
      const control = await Control.create(args);
      return control;
    },
    // TODO: build out a 'viewData' mutation when the time is right
  },
};

module.exports = resolvers;
