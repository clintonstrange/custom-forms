const { Schema, model, isValidObjectId } = require('mongoose');
const bcrypt = require('bcrypt');


const proctorSchema = new Schema(
	{
		// this would be the name of the individual proctoring the screen
		documentor: {
			type: String,
			required: true,
			trim: true
		},

		// this would be a unique number associated with each screen...can we auto generate a 10 digit number that never gets repeated?
		// JAKE--- I believe that ObjectId's auto increment with 12 digits automatically in Mongo,
		// so references the Screening Model should work.
		screenNum: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Screening'
			}
		],

		// what are the credentials of the individual (Civilian, EMT, Paramedic, RN, MD)
		credentials: {
			type: String,
			required: true,
			trim: true
		},
		// JAKE--- I moved the dateTime and createdAt to the Screening Model. If we treat the Proctor 
		// like a User and the Screening Model like a comment/post it would make sense in my mind to 
		// attach it to the Screening Model i.e. the screening session. Then, the User Model would be 
		// just for the hospital/clinic/etc. Let's figure this out tomorrow.
	},
	{
		toJSON: {
			virtuals: true,
			getters: true
		}
	}
);

proctorSchema.virtual('screenNumCount').get(function() {
	return this.screenNum.length;
});

const Proctor = model('Proctor', proctorSchema);

module.exports = Proctor;
