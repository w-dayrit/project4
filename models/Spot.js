var mongoose = require('mongoose');

var SpotSchema = mongoose.Schema({
  name: String,
  address: String,
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Spot', SpotSchema);
