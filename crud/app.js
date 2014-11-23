var express = require('express');
var app = express();
var path = require('path');
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

var ejs = require('ejs'); 
ejs.open = '{{'; 
ejs.close = '}}';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Set server port
app.listen(4000);
console.log('server is running');

// set routes
var routes = require('./routes/curriculo/curriculo')(app);

/**
mongoose.connect('mongodb://localhost/curriculo', function(err, res) {
  if(err) {
    console.log('error connecting to MongoDB Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});
**/

var options = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  user: 'nodejitsu',
  pass: '6d4584da33875d07992fd95f55d3ac13'
}
mongoose.connect('mongodb://nodejitsu:6d4584da33875d07992fd95f55d3ac13@troup.mongohq.com:10097/nodejitsudb7281177395', options);

app.get('/', function(req, res) {
  res.render('index');
});