const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({

	// eventName: {type: String, required: true},
	// eventDate: {type: String, required: true},gi
	// eventClient: String,
    // venue: String,
    // streetOne: String,
    // streetTwo: String,
    // city: String,
    // state: String,
    // zip: String,
    // guestCount: String,
    // schedule: String,
    // catering: String,
    // entertainment: String,
    // Notes: String,
	//you may replace this 'name' field with anything you like
});
//passport-local-mongoose creates a 'username' and some 'password' fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);