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
      return await Screenings.find().populate("control");
    },
    screening: async (parent, { _id }) => {
      return await Screenings.findOne({ _id });
    },
    controls: async () => {
      return await Control.find().populate("screenNum");
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
    addScreening: async (parent, args) => {
      const controlData = await Control.findById({ _id: args.control });
      console.log("======= CONTROL =======" + controlData);

      const screenings = await Screenings.create({
        ...args,
        control: args.control,
        symptons: args.symptons,
        contact: args.contact,
        positiveTest: args.positiveTest,
        travel: args.travel,
        screenDate: args.screenDate,
      });

      console.log("=====SCREENINGS=======" + screenings);

      const updatedScreening = await Screenings.findById({
        _id: screenings._id,
      }).populate("control");

      console.log("===== UPDATED SCREENING =======" + updatedScreening);

      const updateControl = await Control.findByIdAndUpdate(
        { _id: args.control },
        { $push: { screenNum: screenings._id } },
        { new: true }
      ).populate("screenNum");
      console.log("====== UPDATED CONTROL ======" + updateControl);

      return updatedScreening;
    },
    addControl: async (parent, args) => {
      const control = await Control.create(args);
      return control;
    },
    // TODO: build out a 'viewData' mutation when the time is right
    removeScreening: async (parent, args) => {
      await Screenings.findByIdAndDelete({ _id: args._id });
    },
  },
};

module.exports = resolvers;
