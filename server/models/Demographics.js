const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//create a schema for basic demographic information
//first name
//last name
//phone number

const demograpnics = new Schema({
	firstName: {},
	lastName: {},
	phoneNumber: {},
	email: {}
});
