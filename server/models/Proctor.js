const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//create a schema for basic demographic information
//first name
//last name
//phone number

const proctor = new Schema({
	// this would be a unique number associated with each screen...can we auto generate a 10 digit number that never gets repeated?
	screenNum: {},
	// this would be the name of the individual proctoring the screen
	documentor: {},
	// what are the credentials of the individual (EMT, Paramedic, RN, MD)
	credentials: {},
	// this should be a date/time field when the screen took place
	createdAt: {}
});
