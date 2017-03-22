var mongoose = require('mongoose'); //mongoose give interface to mongo-db: It allows to provide models to mdb that maps to db directly
mongoose.Promise = require('bluebird');

  // Create the MovieSchema.
var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

// Export the model.
//module.exports = mongoose.model('movie', MovieSchema);
module.exports = MovieSchema;
