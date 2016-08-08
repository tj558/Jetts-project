var express = require('express');
var router = express.Router();

module.exports = function(passport){

	//sign up
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));

	return router;
}