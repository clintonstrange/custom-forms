const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const dateFormat = require("../utils/dateFormat");

//this file will be used for building the schema for the screening componenets

const covidScreeningSchema = new Schema(
  {
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
    control: [
      {
        type: Schema.Types.ObjectId,
        ref: "Control",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Screenings = model("Screenings", covidScreeningSchema);

module.exports = Screenings;
