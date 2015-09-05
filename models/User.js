var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  // username and password properties provided by passport
  email: String,
  wait_time: Number

  // ref spot
});

module.exports = mongoose.model('User', UserSchema);
