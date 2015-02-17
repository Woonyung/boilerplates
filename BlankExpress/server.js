var express = require('express');
var http = require('http');
var fs = require('fs');
var path = require('path');
var app = express();

app.configure(function(){
	// server port number
	app.set('port', process.env.PORT || 5000);

	// templates directory to 'views'
	app.set('views', __dirname + '/views');
	
	// set up template engine - we're using hogan-express
	app.set('view engine', 'html');
	app.set('layout', 'layout'); // use layout.html as the default layout
	app.engine('html', require('hogan-express'));	

	app.use(express.favicon());
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use('/public', express.static('public'));
});

// SET ROUTES
app.get('/', function(req,res){
	res.render('index.html');
});

app.get('/about', function(req,res){
	res.render('about.html');
});

//////////////////////////
var server = http.createServer(app);
server.listen(app.get('port'), function(){
	console.log("express server listening on port " + app.get('port'));
});