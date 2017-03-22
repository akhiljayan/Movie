var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

mongoose.Promise = require('bluebird');
//creates an express application
var app = express();

/*
Add Middleware necessary for Rest API's
    Middleware intercepts all the requests - comes in b/w all the requests
    it intersepts and tels the plugin to do unique thing
    eg: it intecepts request and tells to use jason encoding by bodyParser.json
    eg: methodOverride('X-HTTP-Method-Override') allows to use http methods
*/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

/*
CORS Support
  Cross Origin Resourse Sharing : reffer=> https://www.youtube.com/watch?v=gwKTj2wddfE
  allow the following
*/
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next()
});

//Hello World
/*app.use('/hello', function(req, res, next){
  res.send("Hello Man");
  next();
});*/

/*
Connect to the MongoDB
*/
mongoose.connect('mongodb://localhost/movieTrailer');
mongoose.connection.once('open',function(){

  //load the models
  app.models = require('./models/index');
  // load all the route files
  var routes = require('./routes');
  _.each(routes,function(controller,route){
    app.use(route,controller(app,route));
  });

  console.log('Listening on port 3000...');
  app.listen(3000);
});
