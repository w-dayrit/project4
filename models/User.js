var mongoose = require('mongoose);

var UserSchema = mongoose.Schema({
  key1: Type;
    // type is String, Integer, etc.
  key2: Type;
});

module.exports = mongoose.model('User', UserSchema);
