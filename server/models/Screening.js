const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const dateFormat = require('../utils/dateFormat');


//this file will be used for building the schema for the screening componenets

const covidScreeningSchema = new Schema(
	{
		control: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Control'
			}
		],
		symptoms: {
			type: String,
			required: true,
			maxlength: 280
		},
		contact: {
			type: Boolean,
			required: true
		},
		positiveTest: {
			type: Boolean,
			required: true
		},
		travel: {
			type: String,
			required: true
		}
	},
	{
		toJSON: {
			virtuals: true,
			getters: true
		},
		id: false
	}
);

const Form = model("Form", covidScreeningSchema);

module.exports = Form;