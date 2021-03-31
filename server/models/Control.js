const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const bcrypt = require("bcrypt");

const controlSchema = new Schema(
  {
    // this would be the name of the individual proctoring the screen
    documentor: {
      type: String,
      required: true,
      trim: true,
    },

    // this would be a unique number associated with each screen...can we auto generate a 10 digit number that never gets repeated?
    // JAKE--- I believe that ObjectId's auto increment with 12 digits automatically in Mongo,
    // so references the Screening Model should work.
    screenNum: [
      {
        type: Schema.Types.ObjectId,
        ref: "Screenings",
      },
    ],

    // what are the credentials of the individual (Civilian, EMT, Paramedic, RN, MD)
    credentials: {
      type: String,
      required: true,
      trim: true,
    },
    // this should be a timestamp field when the screen took place - this should be automatically generated
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

controlSchema.virtual("screenNumCount").get(function () {
  return this.screenNum.length;
});

const Control = model("Control", controlSchema);

module.exports = Control;
