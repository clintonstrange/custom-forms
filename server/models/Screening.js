const { Schema, model } = require("mongoose");

//this file will be used for building the schema for the screening componenets

const covidScreeningForm = new Schema({
  proctor: [
    {
      type: Schema.Types.ObjectId,
      ref: "Proctor",
    },
  ],
  symptoms: {
    type: String,
    required: true,
    trim: true,
  },
  contact: {
    type: String,
    required: true,
    trim: true,
  },
  positiveTest: {
    type: String,
    required: true,
    trim: true,
  },
  travel: {
    type: String,
    required: true,
    trim: true,
  },
});

const Screenings = model("Screenings", covidScreeningForm);

module.exports = Screenings;
