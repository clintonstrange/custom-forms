const { AuthenticationError } = require('apollo-server-express');
const { User, Demographic, Screening } = require('../models');

//this file will be the engine for being able to add things like symptoms to the data base if you are an authenticated user (admin user)
