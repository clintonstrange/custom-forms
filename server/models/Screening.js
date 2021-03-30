const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const dateFormat = require("../utils/dateFormat");

//this file will be used for building the schema for the screening componenets

const covidScreeningSchema = new Schema(
  {
    control:
      {
        type: Schema.Types.ObjectId,
        ref: "Control",
      },
    symptoms: {
      type: String,
      required: true,
      maxlength: 280,
    },
    contact: {
      type: String,
      required: true,
    },
    positiveTest: {
      type: String,
      required: true,
    },
    travel: {
      type: String,
      required: true,
    },
    screenDate: {
      type: Date,
      required: true,
      trim: true,
      get: (timestamp) => dateFormat(timestamp),
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

const Screenings = model("Screenings", covidScreeningSchema);

module.exports = Screenings;
