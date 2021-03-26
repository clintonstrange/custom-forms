const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//this file will be used for building the schema for the screening componenets

const covidScreeningForm = new Schema({
	proctor: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Proctor'
		}
	],
	symptoms: {},
	contact: {},
	positiveTest: {},
	travel: {}
});
