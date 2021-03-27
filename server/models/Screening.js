const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const dateFormat = require('../utils/dateFormat');


//this file will be used for building the schema for the screening componenets

const covidScreeningSchema = new Schema(
	{
		proctor: {
			type: String,
			required: true,
			trim: true
		},
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
		},
		dateTime: {
			type: Number,
			required: true,
			trim: true
		},
		// this should be a timestamp field when the screen took place - this should be automatically generated
		createdAt:{
			type: Date,
			default: Date.now,
			get: timestamp => dateFormat(timestamp)
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

const Screening = model('Screening', covidScreeningSchema);

module.exports = Screening;