var mongoose = require('mongoose');

var club = new mongoose.Schema({
	address: Address,
	clubName: String,
	phone: String, //"+" 0
	manager: user,
	memberCount: Integer, //someone test/check data type

});

var paymentDetails = new mongoose.Schema({
	paymentFrequencyInDays: number, //how often a payment is done between days etc. 12 = days ago a payment was made
	prepaidDateStart: date, //date that prepay starts
	prepaidDateEnd: date, //date that prepay ends
});
var address = new mongoose.Schema({
	streetNumber: String,
	streetName: String, 
	suburb: String,
	city: String,
	postCode: String,
	country: String,
});

var membership = new mongoose.Schema({
	id: number,
	name: String, 
	rate: String,
	discount: String,
});
var user = new mongoose.Schema({
	title: String,
	firstName: String,
	lastName: String,
	email: String, //unique key
	password: String, //hashed
	phone: String,
	altPhone: String,
	dateOfBirth: Date,
	gender: String,
	studentID: String,
	driverLicenseNumber: String,
	emergencyContactName: String,
	emergencyContactNumber: String,
	userMiscInfro: userMisc, // seperate schema to be created
	userHealth: userHealth,
	parq: boolean, //0 = not done 1 = done
	welcomeSession: boolean, //0 = not done 1 = done
	membershipType: membership,
	cardNumber: String, //unique key
	photo: String, //cardNumber_timeUploaded.jpg or .png

});

// Create user shcema for mongo
var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	created_at: {type:Date, default: Date.now}
});

var postSchema = new mongoose.Schema({
	test: String,
	username: String,
	created_at: {type:Date, default: Date.now}
});

// create model from schema
mongoose.model('User', userSchema);
mongoose.model('Post', postSchema);