var mongoose = require('mongoose');


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