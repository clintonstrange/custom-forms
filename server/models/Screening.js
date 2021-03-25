const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//this file will be used for building the schema for the screening componenets

const screeningCriteria = new Schema({
	
	symptoms: {},
	contact: {},
	positiveTest: {},
	travel: {}
});
