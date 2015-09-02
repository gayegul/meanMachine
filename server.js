var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var User = require('./app/models/user');

mongoose.connect('mongodb://localhost/meandb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'x-Requested-With, content-type, \ Authorization');
  next();
});

app.use(morgan('dev'));

app.get('/', function(req, res) {
  res.send('Welcome to the home page!');
});

var apiRouter = express.Router();

apiRouter.use(function(req, res, next) {
  console.log('Somebody just came to our app!');
  next();
});

apiRouter.get('/', function(req, res) {
  res.json({message: 'horray! welcome to our api!'});
});

app.use('/api', apiRouter);

app.listen(port);
console.log('Magic happens on port ' + port);
