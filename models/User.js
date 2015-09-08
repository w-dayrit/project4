var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  // username and password properties provided by passport
  email: String,
  wait_time: Number,
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: []
  }]
  spot: mongoose.Schema.Types.ObjectId,
  ref: 'Spot'

});

module.exports = mongoose.model('User', UserSchema);
