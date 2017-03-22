var restful =require('node-restful'); //read // returns data from mongose modal

//callback which passed route
module.exports = function(app, route){
  // // Setup the controller for REST;
  // Resource(app, '', route, app.models.movie).rest();
  // // Return middleware.
  // return function(req, res, next) {
  //   next();
  // };


  //give 'get','put','post','delete' method for movie modal : using node-restfull module
  var rest = restful.model(
    'movie',
    app.models.movie
  ).methods(['get','put','post','delete']);

  //register this rest api to application: var rest api to app and route
  rest.register(app,route);

  // Return middleware.
  return function(req, res, next) {
    next();
  };

};
