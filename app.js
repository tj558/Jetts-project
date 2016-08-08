//required modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var mongoose = require('mongoose');
//require local files
var app = express();
require('./models/models');
//mongoose.connect(path); connect to mongo
var authenticate = require('./routes/authenticate.js')(passport);
var initPassport = require('./passport-init.js');
initPassport(passport);

var http = require('http').Server(app);
var bodyParser = require('body-parser');
var database ="random@gmail.com";

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing 
app.use(express.static(__dirname));//to have acces to images for the html


app.get('/', function(req, res){
  res.sendfile('index2.html');
});

app.post('/signupsubmit', function(req, res){
	
	var email=req.body.email;
	
	if(!email!=database){
		res.sendfile('medicalForm.html');
		console.log('successtest');
	}else{
		res.send("error");
	}

});

app.post('/medicalsubmit', function(req, res){	
		res.sendfile('pricingForm.html');
	
});

http.listen(5000, function(){
  console.log('listening on version v2 port:5000');
});