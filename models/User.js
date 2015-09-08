var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: String,
  // delete username when implementing passport
  email: String,
  wait_time: Number,
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: []
  }],
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot',
    index: true
  }

});

module.exports = mongoose.model('User', UserSchema);
