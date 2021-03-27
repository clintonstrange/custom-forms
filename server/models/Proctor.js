const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const proctor = new Schema({
	// this would be a unique number associated with each screen...can we auto generate a 10 digit number that never gets repeated?
	screenNum: {},
	// this would be the name of the individual proctoring the screen
	documentor: {},
	// what are the credentials of the individual (Civilian, EMT, Paramedic, RN, MD)
	credentials: {},
	// this should be a date/time field when the screen took place - this is a manual entry
	dateTime: {},
	// this should be a timestamp field when the screen took place - this should be automatically generated
	createdAt:{}

	// anything else that you can think of regardin the proctor you can add here...
});
